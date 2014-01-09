define ([
	'jquery'
], function ($) {

	window.DG = window.DG || {}, jQuery;

	var WINDOW = $(window);

	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame        ||
		window.webkitRequestAnimationFrame    ||
		window.mozRequestAnimationFrame        ||
		window.oRequestAnimationFrame        ||
		window.msRequestAnimationFrame        ||

		function(callback){
			window.setTimeout(callback, 1000/60);
		};
	})();

	DG.SiteSetup = {
		pageWidth			: WINDOW.width(),
		$body				: $('body'),
		logo				: document.getElementById('logo'),
		logoOrientation		: 'hoz',
		filepath			: window.location.href,

		init : function () {

			//setup any mobile specific actions/calls
			DG.SiteSetup.mobileinit();

			DG.SiteSetup.elementAdditions();

			setExternalLinks();

			DG.ResponsiveControl.bindResize();

			DG.GlobalNav.init();

			//DG.ScaleText.init();

			//start the Preloader init to check the images have loaded in before we render to canvas
			if ($('#homeCarousel').length > 0) {
				DG.Preloader.init($('#homeCarousel article img'), DG.Carousel.init);
			}

			//check if we're in the work section of the site and if so initialise JS wonderment
			if ($('.workWrapper').length > 0) {
				DG.Preloader.init($('.featureImg'), DG.WorkWrapper.init);
			}

		},

		mobileinit : function () {
			MBP.scaleFix();
			MBP.hideUrlBar();

			if (window.addEventListener) {
				window.addEventListener('load', function() {
					new FastClick(document.body);
				}, false);
			}
		},

		elementAdditions : function () {

		//add in a div that will allow JS to sync with the CSS by checking its zindex
			var breakpointTest = document.createElement('div');
			breakpointTest.setAttribute('id', 'breakpoint-test');
			document.body.appendChild(breakpointTest);
			DG.ResponsiveControl.$breakpointTest = $('#breakpoint-test');

		//add some extra bits for styling the menu without clogging the markup
			$('#globalNav li').append('<span class="navArrow"></span>');

		},

		switchLogo: function (orientation) {
			//switch the orientation based on trigger call
			if (orientation === 'vrt') {
				(DG.SiteSetup.logo).getElementsByTagName('img')[0].src = '/assets/images/dg_logo.png';
				$(DG.SiteSetup.logo).find('a').css({'width': '170px', 'padding': '30px 0 50px' });
				DG.SiteSetup.logoOrientation = 'vrt';
			} else if (orientation === 'hoz') {
				(DG.SiteSetup.logo).getElementsByTagName('img')[0].src = '/assets/images/dg_logo_hoz.png';
				$(DG.SiteSetup.logo).find('a').css({'width': 'auto', 'padding': '4px 24px 6px' });
				DG.SiteSetup.logoOrientation = 'hoz';
			}
		}


	},

	DG.ResponsiveControl = {
		$breakpointTest		: null,
		currentBreakpoint	: 0,
		newBreakpoint		: 1,

		bindResize : function () {

			//bind to the resize of the window
			WINDOW.bind('resize', function () {

				DG.ResponsiveControl.getNewBreakPoint();

			});

			WINDOW.trigger('resize'); //trigger initial resize

		},

		//gets the zindex from our #breakpoint-test div and sets as our min-width breakpoint
		getNewBreakPoint : function () {

			// inspect the CSS to see what breakpoint the new window width has fallen into
			DG.ResponsiveControl.newBreakpoint = window.getComputedStyle(document.getElementById('breakpoint-test'), null).getPropertyValue("z-index");
			//DG.ResponsiveControl.newBreakpoint = DG.ResponsiveControl.$breakpointTest.css('zIndex');

			DG.ResponsiveControl.checker();
		},

		//any checks on resize fire from here
		checker : function () {

			if (DG.ResponsiveControl.currentBreakpoint !== DG.ResponsiveControl.newBreakpoint) {

				//adjust based on widths
				if (DG.ResponsiveControl.newBreakpoint >= 1330 && DG.SiteSetup.logoOrientation === 'hoz') {
					DG.SiteSetup.switchLogo('vrt');
				} else if (DG.ResponsiveControl.newBreakpoint < 1330 && DG.SiteSetup.logoOrientation === 'vrt') {
					DG.SiteSetup.switchLogo('hoz');
				}

				//workNavigation checks
				DG.WorkWrapper.checkBreakpoints();

			}

			//any checks to fire on every resize event
			if (DG.WorkWrapper.workNav.length > 0 && DG.ResponsiveControl.newBreakpoint >= 832) {
				DG.WorkWrapper.resizeWrapper();
			}


			DG.ResponsiveControl.currentBreakpoint = DG.ResponsiveControl.newBreakpoint;
		}

	},

	DG.GlobalNav = {
		element	: $('#navStrip'),
		navToggle : '',
		open : false,
		navMargin : '-125px',

		init : function () {
			(DG.GlobalNav.element).append('<div id="navToggle"><a href="navToggle"><span>Menu</span></a></div>')
								.css('marginTop', DG.GlobalNav.navMargin);

			DG.GlobalNav.navToggle = $('#navToggle');

			DG.GlobalNav.navToggle.on('click', function (e) {
				e.preventDefault();
				DG.GlobalNav.toggleNav();
			});

		},
		toggleNav : function () {
			var toggleTo;

			if (DG.GlobalNav.open) {
				toggleTo = DG.GlobalNav.navMargin;
			} else {
				toggleTo = '0px';
			}

			(DG.GlobalNav.element).css({
				marginTop : toggleTo
			});

			DG.GlobalNav.open ^= true;
		}
	},

	//uses fitText to scale text in certain sections
	DG.ScaleText = {
		init : function () {
			$(".mainArticle h2").fitText(1, { minFontSize: '36px', maxFontSize: '90px' });

			DG.ScaleText.scaleWorkText();
		},

		scaleWorkText : function () {
			$(".workText h2").fitText(0.6, { minFontSize: '42px', maxFontSize: '60px' });
		}
	},

	DG.Carousel = {
		//'Global' vars
		WIDTH: 618,
		HEIGHT: 274,
		VCOLS: 14,
		HCOLS: 12,

		rowHeight: 0,
		colWidth: 0,
		stripesLength: 0,
		stripeProgress: [],
		transitioning: false,

		ctx : null,
		canvasVisible: $('#homeCarousel-canvasFrame:visible').length,
		canvasLink: $('#homeCarousel-canvasFrame-link'),
		workWrapper: $('#homeCarousel'),
		carouselWrapper: $('.homeCarousel-wrapper'),
		carousel: $('.homeCarousel-carousel'),
		carouselItems: $('.homeCarousel-carousel-item'),
		activeItem: '',
		carouselItemWidth: 0,
		transDirection: '',
		angleArray: [],
		numOfItems: 0,

		init : function () {

			if (DG.Carousel.canvasVisible) {

				//get the canvas element
				var canvas = document.getElementById('homeCarousel-canvasFrame-canvas');

				log(canvas.getContext);

				//check we can get the 2d context
				if (canvas.getContext) {
					DG.Carousel.ctx = canvas.getContext('2d');
				}

			}

			//calculate the number of items in the carousel
			DG.Carousel.numOfItems = (DG.Carousel.carouselItems).length;

			//split the canvas into a number of cols both vertically and horizontally
			DG.Carousel.rowHeight = Math.ceil(DG.Carousel.HEIGHT / DG.Carousel.HCOLS);
			DG.Carousel.colWidth = Math.ceil(DG.Carousel.WIDTH / DG.Carousel.VCOLS);
			DG.Carousel.stripesLength = (DG.Carousel.HCOLS > DG.Carousel.VCOLS ? DG.Carousel.HCOLS : DG.Carousel.VCOLS);


			//now we've loaded, can attach events to the carousel buttons
			(DG.Carousel.workWrapper).append('<a id="carLeft" class="carLeft"></a><a id="carRight" class="carRight"></a>');

			//work out midpoint (floored rather than rounded to get the index)
			var midPoint = Math.floor(DG.Carousel.numOfItems / 2);

			//if it's not an even number take 1 off of the midPoint
			if (DG.Carousel.numOfItems % 2 === 0)
				midPoint--;

			//and move these items to the start so our active element is always the first shown element
			(DG.Carousel.carousel).prepend( (DG.Carousel.carouselItems).slice(DG.Carousel.numOfItems - midPoint, DG.Carousel.numOfItems) );

			//set our active element and add an active class
			DG.Carousel.activeItem = (DG.Carousel.carouselItems).eq(0);
			(DG.Carousel.activeItem).addClass('active');

			//retrieve the newly modifed list of articles after repositioning
			DG.Carousel.carouselItems = $('.homeCarousel-carousel-item');

			//get carousel itemWidth including margins/padding
			DG.Carousel.carouselItemWidth = (DG.Carousel.carouselItems).eq(0).outerWidth(true);

			//work out the hoz and vertical position (for when our images get resized with adaptive images)
			var wrapperWidth = (DG.Carousel.carouselItems).eq(0).width() * DG.Carousel.numOfItems + (18 * DG.Carousel.numOfItems),
				heightDiff = (DG.Carousel.HEIGHT - (DG.Carousel.carouselItems).eq(0).height()) / 2;

			DG.Carousel.carouselWrapper.css({
				'width': wrapperWidth,
				'left' : - (wrapperWidth / 2)
			});

			DG.Carousel.carousel.css({
				paddingTop : Math.floor(heightDiff + 13)
			});

			//attach click listeners
			$('#carLeft, #carRight').on('click', function(event) {
				event.preventDefault();

				//switch on the clicked elements id
				switch (event.currentTarget.id) {
					case 'carRight':
						DG.Carousel.transDirection = 'right';
						break;
					case 'carLeft':
						DG.Carousel.transDirection = 'left';
						break;
				}

				//render the animation of the carousel, if not already in animation
				if (!DG.Carousel.transitioning) {
					DG.Carousel.draw();
				}
			});
		},

		//starts the draw process
		draw : function(direction) {

			//get the current image...
			var currentImage = document.getElementById( (DG.Carousel.activeItem).attr('id') ).getElementsByTagName('img')[0],
				newImage,
				nextItem;


			//not active anymore so remove class
			(DG.Carousel.activeItem).removeClass('active');

			//...and the next image to transition to, based on transDirection
			switch (DG.Carousel.transDirection) {
				case 'left':
					nextItem = (DG.Carousel.activeItem).prev();
					newImage = document.getElementById( nextItem.attr('id') ).getElementsByTagName('img')[0];
					break;
				case 'right':
					nextItem = (DG.Carousel.activeItem).next();
					newImage = document.getElementById( nextItem.attr('id') ).getElementsByTagName('img')[0];
					break;
			}
			//set new active item
			DG.Carousel.activeItem = nextItem;
			nextItem.addClass('active');

			if (DG.Carousel.canvasVisible) {
				DG.Carousel.ctx.drawImage(newImage,0,0, DG.Carousel.WIDTH, DG.Carousel.HEIGHT);
				newCanvas = DG.Carousel.ctx.getImageData(0,0, DG.Carousel.WIDTH, DG.Carousel.HEIGHT);

				DG.Carousel.ctx.drawImage(currentImage,0,0, DG.Carousel.WIDTH, DG.Carousel.HEIGHT);
				currentCanvas = DG.Carousel.ctx.getImageData(0, 0, DG.Carousel.WIDTH, DG.Carousel.HEIGHT);
			}

			//set transitioning to true
			DG.Carousel.transitioning = true;
			//and the progress of what stripe has been drawn
			DG.Carousel.stripeProgress = [0];

			DG.Carousel.slideCarousel();
		},

		//take the animation type and then goes a bit crazy
		animationLoop: function(direction, type) {
			//run the animation function
			DG.Carousel.animate(direction, type);

			//if we're still animating, request another frame
			if (DG.Carousel.transitioning) {
				requestAnimFrame(DG.Carousel.animationLoop);
			}
		},

		//does the actual animation
		animate: function() {
			//define your animation variables
			var modifiedCanvas = currentCanvas, //gets the current state of the canvas
			iStart, iEnd,
			stripeLength = DG.Carousel.stripeProgress.length;

			//loop through the stripes pushed onto our stack
			for (var stripe = 0; stripe < stripeLength; stripe++) {
				//if the stripe ahs been through all its animation sequences, don't eval
				if (DG.Carousel.stripeProgress[stripe] < DG.Carousel.stripesLength + 2) {
					//check for what direction we should be headed and set start and end i pos
					switch (DG.Carousel.transDirection) {
						case 'left':
							iStart = DG.Carousel.colWidth * DG.Carousel.stripeProgress[stripe];
							iEnd = DG.Carousel.colWidth * (DG.Carousel.stripeProgress[stripe] + 1);
							break;
						case 'right':
							iStart = DG.Carousel.colWidth * (DG.Carousel.stripesLength - DG.Carousel.stripeProgress[stripe] - 1);
							iEnd = DG.Carousel.colWidth * (DG.Carousel.stripesLength - DG.Carousel.stripeProgress[stripe]);
							break;
					}

					//what height should we be looping through
					for (var j = Math.floor(stripe * DG.Carousel.rowHeight); j < Math.ceil((stripe * DG.Carousel.rowHeight) + DG.Carousel.rowHeight); j++) {
						//and set the coords to manipulate width wise dependent on direction
						for (var i = iStart; i < iEnd; i++) {
							modifiedCanvas = DG.Carousel.modifyCanvas(modifiedCanvas, i, j, stripe);
						}
					}
					//and then check if we're done looping through all the stripes
					if (DG.Carousel.stripeProgress[DG.Carousel.stripesLength - 1] === DG.Carousel.stripesLength + 1) {
						DG.Carousel.transitioning = false; //if so set to false so we don't keep firing'
						this.updateState();
					}
					//increment the stripes progress animating if less than total length of stripes
					if (DG.Carousel.stripeProgress[stripe] !== DG.Carousel.stripesLength + 2)
						DG.Carousel.stripeProgress[stripe]++;
				}
			}
			//log('_____');
			//for each loop, add a stripe progress element to the array up to the max number of stripes
			if (stripeLength < DG.Carousel.stripesLength)
				DG.Carousel.stripeProgress.push(0);

			//put our modified image up onto the canvas
			DG.Carousel.ctx.putImageData(modifiedCanvas, 0, 0);
		},
		modifyCanvas: function (canvas, i, j, stripe) {

			//work out our nice sine wave for these points
			var angle = Math.floor(Math.sin(2 * Math.PI * 8.5 * j / DG.Carousel.WIDTH)*40) - (DG.Carousel.transDirection === 'left' ? 50 : -50);

			//and apply this to get the index of the canvas to switch
			//(j*4) * width gives us the row
			//i+angle * 4 gives us the column
			var index = (j * 4) * DG.Carousel.WIDTH + ((i + angle) * 4),
				//hozIndex tests where abouts on our image it is modifying, so we don't draw on the wrong side when we don't want it to
				hozIndex = (index - ((j * 4) * DG.Carousel.WIDTH)) /4;

			//check that we aren't modifying the wrong side of the image
			//and that our index is on the canvas and greater than 0
			if ( (DG.Carousel.stripeProgress[stripe] > 2 ||
				( (DG.Carousel.transDirection === 'left' && hozIndex >= 0) || (DG.Carousel.transDirection === 'right' && hozIndex < DG.Carousel.WIDTH) )) &&
					index > 0) {
				//modify that point in the canvas
				canvas.data[index] = newCanvas.data[index];
				canvas.data[index+1] = newCanvas.data[index+1];
				canvas.data[index+2] = newCanvas.data[index+2];
				canvas.data[index+3] = newCanvas.data[index+3]; // ((this.stripesLength - stripeProgress[stripe])/2);
			}

			return canvas;
		},
		//takes care of sliding the carousel in the background
		slideCarousel: function (type) {
			//if statement for direction
			if (DG.Carousel.transDirection === 'left') {
				var lastItem = (DG.Carousel.carouselItems).slice(DG.Carousel.numOfItems-1, DG.Carousel.numOfItems);

				//move about the items in the carousel
				(DG.Carousel.carousel).prepend(lastItem)
					.css('marginLeft', '-' + DG.Carousel.carouselItemWidth + 'px')
					.animate({'marginLeft': 0});

				//and update the carouselItems
				DG.Carousel.carouselItems = $('.homeCarousel-carousel-item');

			} else if (DG.Carousel.transDirection === 'right') {
				var firstItem = (DG.Carousel.carouselItems).slice(0, 1);

				//move about the items in the carousel
				(DG.Carousel.carousel).animate({'marginLeft': '-' + DG.Carousel.carouselItemWidth + 'px'}, function () {
					$(this).append(firstItem).css('marginLeft', 0);

					//and update the CarouselItems
					DG.Carousel.carouselItems = $('.homeCarousel-carousel-item');
				});
			}

			//if canvas is shown, fire the canvas animation
			if (DG.Carousel.canvasVisible) {
				setTimeout(DG.Carousel.animationLoop, 1);
			} else {
				DG.Carousel.transitioning = false;
				this.updateState();
			}
		},
		updateState: function () {
			//update the link on the canvas state with the active items link
			DG.Carousel.canvasLink.attr('href', DG.Carousel.activeItem.find('a').attr('href'))
								.find('h3').html(DG.Carousel.activeItem.find('h3').html());
		}
	},

	DG.WorkWrapper = {
		outer				: $('#work-element'),
		frame				: $('.workWrapper'),
		assetWrap			: $('.workAssets'),
		items				: $('.workWrapper .workAssets li'),
		workNav				: $('.workWrapper nav'),
		workNavLinks		: $('.workWrapper nav a:not(".workSelectionButton")'),
		rawElement			: '',
		navButton			: $('.workWrapper .workSelectionButton'),
		navAnimateDirection	: 'left',
		navPos				: '163',
		activeItem			: null,
		imagesLoaded		: false,

		init: function () {

			DG.WorkWrapper.storeRawCarousel();

			DG.WorkWrapper.checkHash();

			WINDOW.hashchange(function () {
				DG.WorkWrapper.checkHash();
			});

			//lazy load in flexslider plugin when needed
			LazyLoad.js('/assets/js/libs/flexslider/jquery.flexslider.js', function () {
				DG.WorkWrapper.imagesLoaded = true;
				DG.WorkWrapper.checkBreakpoints();

				$('#loadergif').fadeOut(function () {
					DG.WorkWrapper.outer.animate({'opacity': '1'});
				});

			});


		},

		//store raw HTML so we can reinitialise different functionality later when needed
		storeRawCarousel : function () {

			//store our initial HTML
			DG.WorkWrapper.rawElement = DG.WorkWrapper.outer.html();

		},

		//called by responsive resize function whenever we hit a breakpoint in the CSS
		checkBreakpoints : function () {

			//include any changes to the carousel caused by resizing
			//should first remove() already initialised flexslider code
			//then replace with the raw html we have stored
			//and finally call flexslider with new values to reinitialise

			//check we have a work nav
			if (DG.WorkWrapper.workNav.length > 0 && DG.WorkWrapper.imagesLoaded !== false) {

				if (DG.ResponsiveControl.newBreakpoint >= 832) {
					DG.WorkWrapper.bindEvents('fullwidth'); //setup fullwidth bindings
				} else if (DG.ResponsiveControl.newBreakpoint < 832) {
					DG.WorkWrapper.bindEvents('mobile'); //setup mobile bindings
				}

			}

		},

		checkHash : function () {

			var hash = window.location.hash,
				hashElement = $(hash),
				index = 0;

			if (hashElement.length > 0 ) {
				var assets = DG.WorkWrapper.frame.find('.workAssets li');

				assets.removeClass('active');
				DG.WorkWrapper.workNavLinks.removeClass('active');
				hashElement.addClass('active');
				DG.ScaleText.init();

				//get index of hash element
				index = assets.index(hashElement);
			}

			DG.WorkWrapper.workNavLinks.eq(index).addClass('active');
			DG.WorkWrapper.activeItem = $('.workAssets .active');

			WINDOW.trigger('resize');

		},

		resizeWrapper: function () {

			if (DG.WorkWrapper.activeItem !== null) {
				DG.WorkWrapper.frame.height( (DG.WorkWrapper.activeItem).find('img')[0].height );
				DG.WorkWrapper.assetWrap.height( (DG.WorkWrapper.activeItem).find('img')[0].height );
			}

		},

		resetWorkWrapper: function () {

			DG.WorkWrapper.frame.remove();
			DG.WorkWrapper.outer.append(DG.WorkWrapper.rawElement);

			DG.WorkWrapper.frame = $('.workWrapper');
			DG.WorkWrapper.assetWrap = $('.workAssets');
			DG.WorkWrapper.items = DG.WorkWrapper.assetWrap.find('li');
			DG.WorkWrapper.workNav	= DG.WorkWrapper.frame.find('nav');
			DG.WorkWrapper.workNavLinks = DG.WorkWrapper.workNav.find('a:not(".workSelectionButton")');
			DG.WorkWrapper.navButton = DG.WorkWrapper.frame.find('.workSelectionButton');
			DG.WorkWrapper.activeItem = DG.WorkWrapper.assetWrap.find('.active');

			DG.WorkWrapper.checkHash();

		},

		//takes care of the binding of the work nav slider
		navSlider: function () {
			$(DG.WorkWrapper.workNav).hover(
				function () {
					var direction = [];
					direction[DG.WorkWrapper.navAnimateDirection] = '0px';
					DG.WorkWrapper.workNav.stop().animate(direction);
				},
				function () {
					var direction = [];
					direction[DG.WorkWrapper.navAnimateDirection] = - DG.WorkWrapper.navPos + 'px';
					DG.WorkWrapper.workNav.stop().animate(direction);
				}
			);
		},

		goToWorkItem: function (workItemLink) {
			//get the id of the link, from which we can get everything else we needs
			var workItemId = workItemLink.href.split('/')[4],
				workItem = $('#' + workItemId);

			//reset active link
			DG.WorkWrapper.workNavLinks.removeClass('active');
			$(workItemLink).addClass('active');

			DG.WorkWrapper.activeItem.animate({
				'left': '100%'
			}, function () {
				this.style = '';
				this.className = '';
			});

			workItem.css({
				'left': '-100%',
				'display': 'block'
			}).animate({
				'left' : '0%'
			}).addClass('active');

			DG.ScaleText.init();

			DG.WorkWrapper.activeItem = workItem;
		},

		bindEvents: function (type) {

			//if we've got work links, then bind click event to fire goToWorkItem
			if (DG.WorkWrapper.workNavLinks.length > 0) {

				if (type === 'fullwidth') {

					//
					if ($('.flex-viewport').length > 0) {
						DG.WorkWrapper.resetWorkWrapper();
					}

					DG.WorkWrapper.workNav.show();

					DG.ScaleText.scaleWorkText();

					DG.WorkWrapper.workNavLinks.on('click.fullwidth', function (e) {
						e.preventDefault();

						if (DG.WorkWrapper.navAnimateDirection === 'left' && this.className !== 'active') {
							DG.WorkWrapper.goToWorkItem(this);
						}
					});

					DG.WorkWrapper.workNav.show();

					DG.WorkWrapper.navSlider();

				} else if (type === 'mobile') {

					DG.WorkWrapper.workNavLinks.off('click.fullwidth');

					DG.WorkWrapper.workNav.hide();
					DG.WorkWrapper.frame[0].style.height = '';
					DG.WorkWrapper.items.css('left', '0');

					$(".workText h2").each(function () {
						var $this = $(this);
						$this.clone(false).appendTo($this.parent('.workText')).end().remove();
					});
					$(".workText h2").css('font-size', '');


					//reinitialise the flexslider
					DG.WorkWrapper.frame.flexslider({
						animation: "slide",
						slideshow: false,
						selector: '.workAssets > li',
						startAt: DG.WorkWrapper.items.index(DG.WorkWrapper.activeItem)
						/*start: function(slider) {
							$(slider).append('<div class="pager"></div>');
							$(slider).find('.pager').html('<p><sup>' + (slider.currentSlide + 1) + '/</sup>' + slider.count);
						},
						after: function(slider) {
							$(slider).find('.pager').html('<p><sup>' + (slider.currentSlide + 1) + '/</sup>' + slider.count);
						}*/
					});

				}
			}
		}
	},

	//preloader checks the images in our carousel have loaded and only attaches the click events if they have
	DG.Preloader = {
		images: null,
		custCallback : null,

		init: function(images, myCallback) {
			DG.Preloader.images = images;
			DG.Preloader.custCallback = myCallback;

			DG.Preloader.load();
			DG.Preloader.checkForLoad();
		},
		preloadArray: [],
		loadingImages: [],
		// holds our timer ref
		timer: null,

		load: function(image){
			var imageArray = DG.Preloader.preloadArray;
			DG.Preloader.images.each(function() {
				imageArray.push(this.src);
			});

			for(var i in DG.Preloader.preloadArray){
				var newLoading = new Image();
				newLoading.src = DG.Preloader.preloadArray[i];
				DG.Preloader.loadingImages.push(newLoading);
			}
		},

		checkForLoad: function(callback) {
			_self = this;

			_self.timer = setInterval(function(){

				var loadedCount = 0,
					icl = _self.loadingImages.length;

				while(icl--){
					if (_self.loadingImages[icl].complete) {
						loadedCount++;
					}
				}

				if(loadedCount >= _self.loadingImages.length){
					clearInterval(_self.timer);
					_self.loadComplete();
				}

			}, 100);
		},

		loadComplete: function() {
			//Fire passed callback
			DG.Preloader.custCallback();
		}
	};

	DG.SiteSetup.init();


});