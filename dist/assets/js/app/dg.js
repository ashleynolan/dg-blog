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
		pageWidth: WINDOW.width(),
		logo: document.getElementById('logo'),
		logoOrientation: 'hoz',
		filepath: '',
		siteDomain: document.domain,
		siteState: '',

		init : function () {
			//bind to the resize of the window
			WINDOW.bind('resize', function () {
				this.pageWidth = WINDOW.width();

				//adjust based on widths
				if (this.pageWidth >= 1330 && this.logoOrientation === 'hoz') {
					this.switchLogo('vrt');
				} else if (this.pageWidth < 1330 && this.logoOrientation === 'vrt') {
					this.switchLogo('hoz');
				}
			});
			//trigger initial resize
			WINDOW.trigger('resize');

			if (this.siteDomain === 'dgtemplates.local') {
				this.siteState = 'templates';
			} else {
				this.siteState = 'cms';
				//this.filepath = '/assets';
			}
		},
		switchLogo: function (orientation) {
			//switch the orientation based on trigger call
			if (orientation === 'vrt') {
				(this.logo).getElementsByTagName('img')[0].src = this.filepath + 'images/dg_logo.png';
				$(this.logo).find('a').css({'width': '170px', 'padding': '30px 0 50px' });
				this.logoOrientation = 'vrt';
			} else if (orientation === 'hoz') {
				(this.logo).getElementsByTagName('img')[0].src = this.filepath + 'images/dg_logo_hoz.png';
				$(this.logo).find('a').css({'width': 'auto', 'padding': '4px 24px 6px' });
				this.logoOrientation = 'hoz';
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
		transitioning: false,

		canvasVisible: $('#canvasFrame:visible').length,
		workWrapper: $('#work'),
		carousel: $('#work .carousel'),
		carouselItems: $('#work div div article'),
		activeItem: '',
		carouselItemWidth: 0,
		transDirection: '',
		angleArray: [],
		numOfItems: 0,

		init : function () {

			log('go!');

			if (this.canvasVisible) {

				//get the canvas element
				var canvas = document.getElementById('carouselFeatured');

				//check we can get the 2d context
				if (canvas.getContext) {
					ctx = canvas.getContext('2d');
				}

			}

			this.numOfItems = (this.carouselItems).length;

			this.rowHeight = Math.ceil(this.HEIGHT / this.HCOLS);
			this.colWidth = Math.ceil(this.WIDTH / this.VCOLS);
			this.stripesLength = (this.HCOLS > this.VCOLS ? this.HCOLS : this.VCOLS);


			//now we've loaded, can attach events to the carousel buttons
			(this.workWrapper).append('<a id="carLeft"></a><a id="carRight"></a>');

			//work out midpoint (floored rather than rounded to get the index)
			var midPoint = Math.floor(this.numOfItems / 2);

			if (this.numOfItems % 2 === 0)
				midPoint--;

			//and put these at the start so our active element is always the first article element
			(this.carousel).prepend( (this.carouselItems).slice(this.numOfItems - midPoint, this.numOfItems) );

			this.activeItem = (this.carouselItems).eq( 0 );
			(this.activeItem).addClass('active');

			this.carouselItems = $('#work div div article');

			this.carouselItemWidth = (this.carouselItems).eq(0).outerWidth(true);

			//attach click listeners
			$('#work a#carLeft, #work a#carRight').bind('click', function(event) {
				event.preventDefault();

				switch (event.currentTarget.id) {
					case 'carRight':
						DG.Carousel.transDirection = 'right';
						break;
					case 'carLeft':
						DG.Carousel.transDirection = 'left';
						break;
				}

				//render the animation of the carousel
				if (!DG.Carousel.transitioning) {
					DG.Carousel.draw();
				}
			});
		},

		//starts the draw process
		draw : function(direction) {

			//get the current image...
			var currentImage = document.getElementById( (this.activeItem).attr('id') ).getElementsByTagName('img')[0],
				newImage;

			//not active anymore so remove class
			(this.activeItem).removeClass('active');

			//...and the next image to transition to
			var nextItem;
			switch (this.transDirection) {
				case 'left':
					nextItem = (this.activeItem).prev();
					newImage = document.getElementById( nextItem.attr('id') ).getElementsByTagName('img')[0];
					break;
				case 'right':
					nextItem = (this.activeItem).next();
					newImage = document.getElementById( nextItem.attr('id') ).getElementsByTagName('img')[0];
					break;
			}
			//new active item
			this.activeItem = nextItem;
			nextItem.addClass('active');

			if (this.canvasVisible) {
				ctx.drawImage(newImage,0,0, 618, 274);
				newCanvas = ctx.getImageData(0,0,618, 274);

				ctx.drawImage(currentImage,0,0, 618, 274);
				currentCanvas = ctx.getImageData(0,0,618, 274);
			}

			//set transitioning to true
			this.transitioning = true;
			//and the progress of what stripe has been
			stripeProgress = [0];

			this.slideCarousel();
		},

		//take the animation type and then goes a bit crazy
		animationLoop: function(direction, type) {
			//run the animation function
			DG.Carousel.animate(direction, type);

			//if we're still animating, request another frame
			if (DG.Carousel.transitioning) {
			//	window.setTimeout(
			//	(function animloop(){
					requestAnimFrame(DG.Carousel.animationLoop);
			//	}), 1000/10);
			}
		},

		//does the actual animation
		animate: function() {
			//define your animation variables
			var modifiedCanvas = currentCanvas, //gets the current state of the canvas
			iStart, iEnd,
			stripeLength = stripeProgress.length;

			//loop through the stripes pushed onto our stack
			for (var stripe = 0; stripe < stripeLength; stripe++) {
				//if the stripe ahs been through all its animation sequences, don't eval
				if (stripeProgress[stripe] < this.stripesLength+2) {
					//check for what direction we should be headed and set start and end i pos
					switch (DG.Carousel.transDirection) {
						case 'left':
							iStart = this.colWidth * stripeProgress[stripe];
							iEnd = this.colWidth * (stripeProgress[stripe] + 1);
							break;
						case 'right':
							iStart = this.colWidth * (this.stripesLength - stripeProgress[stripe] - 1);
							iEnd = this.colWidth * (this.stripesLength - stripeProgress[stripe]);
							break;
					}

					//what height should we be looping through
					for (var j = Math.floor(stripe * this.rowHeight); j < Math.ceil((stripe * this.rowHeight) + this.rowHeight); j++) {
						//and set the coords to manipulate width wise dependent on direction
						for (var i = iStart; i < iEnd; i++) {
							modifiedCanvas = DG.Carousel.modifyCanvas(modifiedCanvas, i, j, stripe);
						}
					}
					//and then check if we're done looping through all the stripes
					if (stripeProgress[this.stripesLength-1] === this.stripesLength +1) {
						DG.Carousel.transitioning = false; //if so set to false so we don't keep firing'
					}
					//increment the stripes progress animating if less than total length of stripes
					if (stripeProgress[stripe] !== this.stripesLength + 2)
						stripeProgress[stripe]++;
				}
			}
			//log('_____');
			//for each loop, add a stripe progress element to the array up to the max number of stripes
			if (stripeLength < this.stripesLength)
				stripeProgress.push(0);

			//put our modified image up onto the canvas
			ctx.putImageData(modifiedCanvas, 0, 0);
		},
		modifyCanvas: function (canvas, i, j, stripe) {

			//work out our nice sine wave for these points
			var angle = Math.floor(Math.sin(2 * Math.PI * 8.5 * j/this.WIDTH)*40) - (DG.Carousel.transDirection === 'left' ? 50 : -50);

			//and apply this to get the index of the canvas to switch
			//(j*4) * width gives us the row
			//i+angle * 4 gives us the column
			var index = (j * 4) * this.WIDTH + ((i + angle) * 4),
				//hozIndex tests where abouts on our image it is modifying, so we don't draw on the wrong side when we don't want it to
				hozIndex = (index - ((j * 4) * this.WIDTH)) /4;

			//check that we aren't modifying the wrong side of the image
			//and that our index is on the canvas and greater than 0
			if ( (stripeProgress[stripe] > 2 ||
				( (DG.Carousel.transDirection === 'left' && hozIndex >= 0) || (DG.Carousel.transDirection === 'right' && hozIndex < DG.Carousel.WIDTH) ))
				&& index > 0) {
				//modify that point in the canvas
				canvas.data[index] = newCanvas.data[index];
				canvas.data[index+1] = newCanvas.data[index+1];
				canvas.data[index+2] = newCanvas.data[index+2];
				canvas.data[index+3] = newCanvas.data[index+3]; // ((this.stripesLength - stripeProgress[stripe])/2);
			}

			return canvas;
		},
		slideCarousel: function (type) {
			if (DG.Carousel.transDirection == 'left') {
				var lastItem = (DG.Carousel.carouselItems).slice(this.numOfItems-1, this.numOfItems);

				(DG.Carousel.carousel).prepend(lastItem)
					.css('marginLeft', '-' + DG.Carousel.carouselItemWidth + 'px')
					.animate({'marginLeft': 0});
				DG.Carousel.carouselItems = $('#work div div article');
			} else if (DG.Carousel.transDirection == 'right') {
				var firstItem = (DG.Carousel.carouselItems).slice(0, 1);
				(DG.Carousel.carousel).animate({'marginLeft': '-' + DG.Carousel.carouselItemWidth + 'px'}, function () {
					$(this).append(firstItem).css('marginLeft', 0);
					DG.Carousel.carouselItems = $('#work div div article');
				});
			}

			if (DG.Carousel.canvasVisible) {
				setTimeout(DG.Carousel.animationLoop, 1);
			} else {
				DG.Carousel.transitioning = false;
			}
		}
	},
	//preloader checks the images in our carousel have loaded and only attaches the click events if they have
	DG.Preloader = {
		preloadArray: [],
		loadingImages: [],
		// holds our timer ref
		timer: null,

		init: function(){
			this.load();
			this.checkForLoad();
		},

		load: function(image){
			var imageArray = this.preloadArray;
			$('#work article img').each(function() {
				imageArray.push(this.src);
			});

			for(var i in this.preloadArray){
				var newLoading = new Image();
				newLoading.src = this.preloadArray[i];
				this.loadingImages.push(newLoading);
			}
		},

		checkForLoad: function(callback){
			_self = this;

			this.timer = setInterval(function(){

				var loadedCount = 0,
					icl = _self.loadingImages.length;

				while(icl--){
					if (_self.loadingImages[icl].complete)
						loadedCount++;
				}

				if(loadedCount >= _self.loadingImages.length){
					clearInterval(_self.timer);
					_self.loadComplete();
				}

			}, 100);
		},

		loadComplete: function(){

			//inialise the carousel
			DG.Carousel.init();

		}
	};

	DG.SiteSetup.init();
	DG.Preloader.init();



});