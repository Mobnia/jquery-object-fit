(function ($) {
    $.fn.repostcard = function (options) {
        console.log($(this));
        var img = $(this).each(function (i, elem) {
            var css = {};
            var imger = $(elem);
            console.log(imger.attr("src"));
            css.background = "url(" + imger.attr("src") + ") no-repeat ";
            if(options.horizontal){
                css.background += " "+ options.horizontal;
            }
            if(options.vertical){
                css.background += " "+ options.vertical;
            }
           if(options.size){
               css['background-size'] = options.size;
           }

            if (options.height) {
                css.height = options.height;
            }
            if (options.width) {
                css.width = options.width;
            }

            var replacement_style = {};
            $.each(css, function (index, value) {
                replacement_style[index] = value;
            });
            return $(this).filter(elem).replaceWith(
                $("" + options.replacement_element + "")
                    .css(replacement_style)
                    .addClass(options.replacement_class));
        })
    }

}(jQuery));