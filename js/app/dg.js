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

			//start the Preloader init to check the images have loaded in before we render to canvas
			if ($('#homeCarousel').length > 0) {
				DG.Preloader.init($('.featureImg'), DG.Carousel.init);
			}

			//check if we're in the work section of the site and if so initialise JS wonderment
			if ($('.work').length > 0) {
				DG.Work.init();
			}

			DG.DateHandler.init();

		},

		mobileinit : function () {
			MBP.scaleFix();
			MBP.hideUrlBar();

			if (window.addEventListener) {
				window.addEventListener('load', function() {
					var swiftclick = SwiftClick.attach (document.body);
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

	DG.DateHandler = {

		age : null,

		init : function () {

			this.age = $('#age');

			if (this.age.length > 0) {
				this.calculateDates();
			}

		},

		calculateDates : function () {


			var ageYears = moment().from(this.age[0].getAttribute('data-age'), true),
				ageDays = moment().diff(this.age[0].getAttribute('data-age'), 'days'),
				birthYearDays = moment().diff('04-09-' + moment().format('YYYY'), 'days');

			$('#age').html(ageYears + ', ' + birthYearDays + ' days');

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

	DG.Work = {

		navItems : $('.nav-work-link'),
		sections : $('.work-section'),
		APPENDED_CLASS : 'active',

		init : function () {

			this.eventListeners.setup();

		},

		eventListeners : {

			setup : function () {

				DG.Work.navItems.on('click', this.navItemSelected);

			},

			navItemSelected : function (e) {
				e.preventDefault();

				var navItemIndex = DG.Work.navItems.index(this);

				DG.Work.sections.removeClass(DG.Work.APPENDED_CLASS)
					.eq(navItemIndex).addClass(DG.Work.APPENDED_CLASS);

				DG.Work.navItems.removeClass(DG.Work.APPENDED_CLASS)
					.eq(navItemIndex).addClass(DG.Work.APPENDED_CLASS);
			}

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
			(DG.Carousel.workWrapper).append('<a id="carLeft" class="carLeft icon-arrow-left"></a><a id="carRight" class="carRight icon-arrow-right"></a>');

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

			DG.Carousel.initialDraw();

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

		initialDraw : function () {

			var img = DG.Carousel.activeItem.find('img')[0];

			DG.Carousel.ctx.drawImage(img,0,0, DG.Carousel.WIDTH, DG.Carousel.HEIGHT);
			//newCanvas = DG.Carousel.ctx.getImageData(0,0, DG.Carousel.WIDTH, DG.Carousel.HEIGHT);

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