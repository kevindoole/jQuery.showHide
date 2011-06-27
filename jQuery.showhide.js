(function($) {
	$.fn.showHide = function (target, options) {
		options = (!options) ? $.fn.showHide.defaults : $.extend($.fn.showHide.defaults, options);
		
		return this.each(function () {
			var id = $(this).attr("id");
			
			if (options.replaceSubject === true) {
				var ret = "<div id='" + id + "' class='" + options.replaceClass + "'><a href='#'>" + options.replaceWithText;
				if (options.dropdown === true) {
					ret += "<span class='showHide-dropdown-arrow'>&#9660;</span>";
				}
				ret += "</a></div>";
				$(this).replaceWith(ret);
			}
			
			$("#" + id).bind("click", function () {
				var THIS = $(this);
				if (!THIS.hasClass(options.activeClass)) {
					THIS.addClass(options.activeClass);
					target.show().append("<div id='" + options.hideIdPrefix + "-" + id + "'><a href='#' class='" + options.hideClass + "'>" + options.hideText + "</a></div>");
					$("#" + options.hideIdPrefix + "-" + id).one("click", function () {
						target.hide();
						$(this).remove();
						THIS.removeClass(options.activeClass);
						return false;
					});
				} else {
					target.hide();
					$("#" + options.hideIdPrefix + "-" + id).remove();
					THIS.removeClass(options.activeClass);
					return false;
				}
				return false;
			});
			
		});
	}
	
	$.fn.showHide.defaults = {
		hideText: 'close',
		hideIdPrefix: 'close',
		hideClass: 'showHide-close',
		activeClass: 'showHide-button-active',
		replaceSubject: false,
		replaceClass: 'showHide-button',
		replaceWithText: 'options',
		dropdown: false
	};	
})(jQuery);