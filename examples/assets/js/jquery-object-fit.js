(function ($) {
    $.fn.jqueryObjectFit = function (options) {
        var img = $(this).each(function (i, elem) {
            var css = {};
            var imger = $(elem);
            css.background = "url(" + imger.attr("src") + ") no-repeat ";
            if (options.horizontal) {
                css.background += " " + options.horizontal;
            }
            if (options.vertical) {
                css.background += " " + options.vertical;
            }
            if (options.size) {
                css['background-size'] = options.size;
            }

            if (options.height) {
                css.height = options.height;
            }
            if (options.width) {
                css.width = options.width;
            }
            if (options.replacement_class) {
                var replacement_class = options.replacement_class + " replacement";
            } else {
                var replacement_class = " replacement";
            }

            var replacement_style = {};
            $.each(css, function (index, value) {
                replacement_style[index] = value;
            });
            var clone = imger.clone();
            imger.replaceWith(
                $("" + options.replacement_element + "")
                    .css(replacement_style)
                    .addClass(replacement_class));
            $(".replacement").html(clone.css({position:'absolute',right:'-'+$(window).outerWidth()+'%'})).css({'overflow-x':'hidden'});

        })
    }

}(jQuery));