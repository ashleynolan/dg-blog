/*
 * MBP - Mobile boilerplate helper functions
 */

window.MBP = window.MBP || {};

// Fix for iPhone viewport scale bug
// http://www.blog.highub.com/mobile-2/a-fix-for-iphone-viewport-scale-bug/

MBP.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
MBP.ua = navigator.userAgent;

MBP.scaleFix = function () {
  if (MBP.viewportmeta && /iPhone|iPad|iPod/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {
    MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    document.addEventListener("gesturestart", MBP.gestureStart, false);
  }
};
MBP.gestureStart = function () {
  MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
};


/*
  * Normalized hide address bar for iOS & Android
  * (c) Scott Jehl, scottjehl.com
  * MIT License
*/

// If we split this up into two functions we can reuse
// this function if we aren't doing full page reloads.

// If we cache this we don't need to re-calibrate everytime we call
// the hide url bar
MBP.BODY_SCROLL_TOP = false;

// So we don't redefine this function everytime we
// we call hideUrlBar
MBP.getScrollTop = function(){
  var win = window,
      doc = document;

  return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
};

// It should be up to the mobile
MBP.hideUrlBar = function(){
    var win = window;

    // if there is a hash, or MBP.BODY_SCROLL_TOP hasn't been set yet, wait till that happens
    if( !location.hash && MBP.BODY_SCROLL_TOP !== false){
        win.scrollTo( 0, MBP.BODY_SCROLL_TOP === 1 ? 0 : 1 );
    }
};

MBP.hideUrlBarOnLoad = function () {
  var win = window,
      doc = win.document;

  // If there's a hash, or addEventListener is undefined, stop here
  if( !location.hash && win.addEventListener ) {

    //scroll to 1
    window.scrollTo( 0, 1 );
    MBP.BODY_SCROLL_TOP = 1;

    //reset to 0 on bodyready, if needed
    bodycheck = setInterval(function() {
      if( doc.body ) {
        clearInterval( bodycheck );
        MBP.BODY_SCROLL_TOP = MBP.getScrollTop();
        MBP.hideUrlBar();
      }
    }, 15 );

    win.addEventListener( "load", function() {
      setTimeout(function() {
        //at load, if user hasn't scrolled more than 20 or so...
        if( MBP.getScrollTop() < 20 ) {
          //reset to hide addr bar at onload
          MBP.hideUrlBar();
        }
      }, 0);
    } );
  }
};


MBP.ghostClickHandler = function (event) {
  if (!MBP.hadTouchEvent && 'ontouchstart' in window) {
    // This is a bit of fun for Android 2.3...
    // If you change window.location via fastButton, a click event will fire
    // on the new page, as if the events are continuing from the previous page.
    // We pick that event up here, but MBP.coords is empty, because it's a new page,
    // so we don't prevent it. Here's we're assuming that click events on touch devices
    // that occur without a preceding touchStart are to be ignored.
    event.stopPropagation();
    event.preventDefault();
    return;
  }
  for(var i = 0, len = MBP.coords.length; i < len; i += 2) {
    var x = MBP.coords[i];
    var y = MBP.coords[i + 1];
    if(Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
};

if (document.addEventListener) {
  document.addEventListener('click', MBP.ghostClickHandler, true);
}

addEvt( document.documentElement, 'touchstart', function() {
  MBP.hadTouchEvent = true;
}, false);

MBP.coords = [];

// fn arg can be an object or a function, thanks to handleEvent
// read more about the explanation at: http://www.thecssninja.com/javascript/handleevent
function addEvt(el, evt, fn, bubble) {
  if("addEventListener" in el) {
    // BBOS6 doesn't support handleEvent, catch and polyfill
    try {
      el.addEventListener(evt, fn, bubble);
    } catch(e) {
      if(typeof fn == "object" && fn.handleEvent) {
        el.addEventListener(evt, function(e){
        // Bind fn as this and set first arg as event object
        fn.handleEvent.call(fn,e);
        }, bubble);
      } else {
        throw e;
      }
    }
  } else if("attachEvent" in el) {
    // check if the callback is an object and contains handleEvent
    if(typeof fn == "object" && fn.handleEvent) {
      el.attachEvent("on" + evt, function(){
        // Bind fn as this
        fn.handleEvent.call(fn);
      });
    } else {
      el.attachEvent("on" + evt, fn);
    }
  }
}

function rmEvt(el, evt, fn, bubble) {
  if("removeEventListener" in el) {
    // BBOS6 doesn't support handleEvent, catch and polyfill
    try {
      el.removeEventListener(evt, fn, bubble);
    } catch(e) {
      if(typeof fn == "object" && fn.handleEvent) {
        el.removeEventListener(evt, function(e){
          // Bind fn as this and set first arg as event object
          fn.handleEvent.call(fn,e);
        }, bubble);
      } else {
        throw e;
      }
    }
  } else if("detachEvent" in el) {
    // check if the callback is an object and contains handleEvent
    if(typeof fn == "object" && fn.handleEvent) {
      el.detachEvent("on" + evt, function(){
        // Bind fn as this
        fn.handleEvent.call(fn);
      });
    } else {
      el.detachEvent("on" + evt, fn);
    }
  }
}


// iOS Startup Image
// https://github.com/h5bp/mobile-boilerplate/issues#issue/2

MBP.splash = function () {
  var filename = navigator.platform === 'iPad' ? 'h/' : 'l/';
  document.write('<link rel="apple-touch-startup-image" href="/img/' + filename + 'splash.png" />' );
};


// Autogrow
// http://googlecode.blogspot.com/2009/07/gmail-for-mobile-html5-series.html

MBP.autogrow = function (element, lh) {
  function handler(e){
    var newHeight = this.scrollHeight,
        currentHeight = this.clientHeight;
    if (newHeight > currentHeight) {
      this.style.height = newHeight + 3 * textLineHeight + "px";
    }
  }

  var setLineHeight = (lh) ? lh : 12,
      textLineHeight = element.currentStyle ? element.currentStyle.lineHeight :
                       getComputedStyle(element, null).lineHeight;

  textLineHeight = (textLineHeight.indexOf("px") == -1) ? setLineHeight :
                   parseInt(textLineHeight, 10);

  element.style.overflow = "hidden";
  element.addEventListener ? element.addEventListener('keyup', handler, false) :
                             element.attachEvent('onkeyup', handler);
};


// Enable active
// Enable CSS active pseudo styles in Mobile Safari
// http://miniapps.co.uk/blog/post/enable-css-active-pseudo-styles-in-mobile-safari/
MBP.enableActive = function () {
  document.addEventListener("touchstart", function() {}, false);
};


// Prevent iOS from zooming onfocus
// http://nerd.vasilis.nl/prevent-ios-from-zooming-onfocus/

MBP.viewportMeta = $('meta[name="viewport"]');
MBP.preventZoom = function () {
  $('input, select, textarea').bind('focus blur', function(event) {
    MBP.viewportMeta.attr('content', 'width=device-width,initial-scale=1,maximum-scale=' + (event.type == 'blur' ? 10 : 1));
  });
};

/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENCE.txt)
 * @codingstandard ftlabs-jslint
 */

/*jslint browser:true*/
/*global Node, define*/

(function() {
	'use strict';

	var


		/**
		 * Earlier versions of Chrome for Android don't report themselves as "Chrome" but "CrMo" - check for both.
		 *
		 * @type boolean
		 */
		chromeAndroid = /Android.+Chrome|CrMo/.test(navigator.userAgent),


		/**
		 * Placebook requires a greater scroll boundary.
		 *
		 * @type number
		 */
		scrollBoundary = navigator.userAgent.indexOf('PlayBook') === -1 ? 5 : 20;


	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {Element} target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	function needsClick(target) {
		switch (target.nodeName.toLowerCase()) {
			case 'textarea':
			case 'select':
			case 'input':
			case 'label':
			case 'video':
			return true;
			default:
			return (/\bneedsclick\b/).test(target.className);
		}
	}


	/**
	 * Retrieve an element based on coordinates within the window.
	 *
	 * @param {number} x
	 * @param {number} y
	 * @return {Element}
	 */
	function eleAtWindowPosition(x, y) {

		// On Chrome for Android, amend coordinates by the device pixel ratio.
		if (chromeAndroid && window.devicePixelRatio) {
			x *= window.devicePixelRatio;
			y *= window.devicePixelRatio;
		}

		return document.elementFromPoint(x, y);
	}


	/**
	 * Instantiate fast-clicking listeners on the specificed layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 */
	function FastClick(layer) {
		var


			/**
			 * @type Function
			 */
			oldOnClick,


			/**
			 * The position and page scroll amount when click had started to be tracked.
			 *
			 * @type Object
			 */
			clickStart = { x: 0, y: 0,  scrollX: 0, scrollY: 0 },


			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			trackingClick = false,


			/**
			 * Maximum distance (37 pixels) to the power of two.
			 *
			 * @type number
			 */
			bound = Math.pow(37, 2),


			/**
			 * On touch start, record the position and scroll offset.
			 *
			 * @param {Event} event
			 * @returns {boolean}
			 */
			onTouchStart = function(event) {
				trackingClick = true;

				clickStart.x = event.targetTouches[0].pageX;
				clickStart.y = event.targetTouches[0].pageY;
				if (clickStart.x === event.targetTouches[0].clientX) {
					clickStart.x += window.pageXOffset;
				}
				if (clickStart.y === event.targetTouches[0].clientY) {
					clickStart.y += window.pageYOffset;
				}
				clickStart.scrollX = window.pageXOffset;
				clickStart.scrollY = window.pageYOffset;

				return true;
			},


			/**
			 * Update the last position.
			 *
			 * @param {Event} event
			 * @returns {boolean}
			 */
			onTouchMove = function(event) {
				if (!trackingClick) {
					return true;
				}

				// Detect whether a click has left the bounds of would be defined as a click, defined as a circle of radius sqrt(bound) around the start point.
				if ((Math.pow(event.targetTouches[0].pageX - clickStart.x, 2) + Math.pow(event.targetTouches[0].pageY - clickStart.y, 2)) > bound) {
					trackingClick = false;
				}

				// If the touch has moved, cancel the click tracking
				if (Math.abs(window.pageXOffset - clickStart.scrollX) > scrollBoundary || Math.abs(window.pageYOffset - clickStart.scrollY) > scrollBoundary) {
					trackingClick = false;
				}

				return true;
			},


			/**
			 * On touch end, determine whether to send a click event at once.
			 *
			 * @param {Event} event
			 * @returns {boolean}
			 */
			onTouchEnd = function(event) {
				var targetElement, targetCoordinates, clickEvent;

				if (!trackingClick) {
					return true;
				}

				trackingClick = false;

				// Set up the coordinates to match
				targetCoordinates = {
					x: clickStart.x - clickStart.scrollX,
					y: clickStart.y	- clickStart.scrollY
				};

				// Derive the element to click as a result of the touch.
				targetElement = eleAtWindowPosition(targetCoordinates.x, targetCoordinates.y);

				// If we're not clicking anything exit early
				if (!targetElement) {
					return false;
				}

				// If the targetted node is a text node, target the parent instead
				if (targetElement.nodeType === Node.TEXT_NODE) {
					targetElement = targetElement.parentElement;
				}

				// Prevent the actual click from going though - unless the target node is marked as requiring
				// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted
				// to open the options list and so the original event is required.
				if (needsClick(targetElement)) {
					return false;
				}

				// Synthesise a click event, with an extra attribute so it can be tracked
				clickEvent = document.createEvent('MouseEvents');
				clickEvent.initMouseEvent('click', true, true, window, 1, 0, 0, targetCoordinates.x, targetCoordinates.y, false, false, false, false, 0, null);
				clickEvent.forwardedTouchEvent = true;
				targetElement.dispatchEvent(clickEvent);

				event.preventDefault();
				return false;
			},


			/**
			 * On touch cancel, stop tracking the click.
			 */
			onTouchCancel = function() {
				trackingClick = false;
			},


			/**
			 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
			 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
			 * an actual click which should be permitted.
			 *
			 * @param {Event} event
			 * @returns {boolean}
			 */
			onClick = function(event) {
				var targetElement;

				if (event.forwardedTouchEvent) {
					return true;
				}

				// Programmatically generated events targeting a specific element should be permitted
				if (!event.cancelable) {
					return true;
				}

				targetElement = eleAtWindowPosition(clickStart.x - clickStart.scrollX, clickStart.y - clickStart.scrollY);

				// Derive and check the target element to see whether the click needs to be permitted;
				// unless explicitly enabled, prevent non-touch click events from triggering actions,
				// to prevent ghost/doubleclicks.
				if (!targetElement || !needsClick(targetElement)) {

					// Prevent any user-added listeners declared on FastClick element from being fired.
					if (event.stopImmediatePropagation) {
						event.stopImmediatePropagation();
					}

					// Cancel the event
					event.stopPropagation();
					event.preventDefault();

					return false;
				}

				// If clicks are permitted, return true for the action to go through.
				return true;
			};

		if (!layer || !layer.nodeType) {
			throw new TypeError('Layer must be a document node');
		}

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return;
		}

		// Set up event handlers as required
		layer.addEventListener('click', onClick, true);
		layer.addEventListener('touchstart', onTouchStart, true);
		layer.addEventListener('touchmove', onTouchMove, true);
		layer.addEventListener('touchend', onTouchEnd, true);
		layer.addEventListener('touchcancel', onTouchCancel, true);

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	if (typeof define === 'function' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else {

		// Browser global
		window.FastClick = FastClick;
	}
}());