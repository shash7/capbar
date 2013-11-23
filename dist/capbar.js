/*
 * liti.js
 */

;(function($, window) {
	
	'use strict';
	
	/*
	 * Utils
	 */
	var utils = {
		
		
		isPresent : function(selector) {
			if($(selector).length < 1) {
				return false;
			} else {
				return true;
			}
		}
	};
	
	/*
	 * Capbar
	 */
	window.Capbar = function(attr) {
		
		attr = attr || {};
		if(!attr.element) {
			if(!utils.isPresent('.bar')) {
				$('body').append('<div class="bar"></div>');
			}
			attr.element = '.bar';
		}
		var element = attr.element;
		var selector = attr.selector || '[data-target="liti"]';
		var maxChars = 0;
		var section = 0;
		var isInvalid = false;
		var progress = 0;
		
		/*
		 * Public functions
		 */
		function start() {
			$(selector).on('focus', stage);
			$(selector).on('keyup', increment);
			$(selector).on('blur', unstage);
		}
		
		function stop() {
			unstage();
			$(selector).off('focus', stage);
			$(selector).off('keyup', increment);
			$(selector).off('blur', unstage);
		}
		
		/*
		 * Private functions
		 */
		function stage() {
			var el = $(this);
			$(element).addClass('active');
			var len = calc(el);
			maxChars = el.data().maxchars || 12;
			section = 100/maxChars;
			progress = len*section;
			overflow(len, progress);
			apply(progress);
		}
		
		function unstage() {
			$(element).removeClass('active');
			maxChars = 0;
			section = 0;
			isInvalid = false;
			progress = 0;
		}
			
		function increment() {
			var el = $(this);
			var len = calc(el);
			section = 100/maxChars;
			progress = len*section;
			overflow(len, progress);
			apply(progress);
		}
		
		function apply(width) {
			$(element).css({
				'width' : width + '%'
			});
		}
		
		function overflow(len, progress) {
			if(len > maxChars) {
				isInvalid = true;
			} else {
				isInvalid = false;
			}
			if(!isInvalid) {
				$(element).removeClass('alert');
			} else {
				$(element).addClass('alert');
			}
		}
		
		function calc(el) {
			return el.val().length;
		}
		
		return {
			start : start,
			stop  : stop
		};
	};
})(jQuery, window);