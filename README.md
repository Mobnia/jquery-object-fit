# jquery-object-fit

> Adds `object-fit` support to images on non-supporting browsers while maintaining separation of content and presentation


jquery-object-fit solves problems with displaying variable image dimensions in the browser.

Many times when working with user generated image content, you'll find that many users hardly bother to follow your advice for best image dimensions.

Common solutions to this problem includes providing a cropper to force the user to re-dimension their images according to specified aspect ratio in the browser or running a script on the server to resize the images automatically. The results are usually not the best.

CSS 3's `Object-fit` properties was designed to solve this problem for images and other media objects in the page, however support across browsers is still not uniform

![](http://9bd75401e89e36cf5da0-52a755e0ff70c6a119cad974604352c2.r38.cf2.rackcdn.com/github_pages/object-fit-caniuse.png)

Work-arounds to provide similar benefits to other browsers many times utilizing `background-size` and `background-position` exist but they fail to keep content and presentation separate.
[Using CSS’s object-fit and object-position Properties](https://www.sitepoint.com/using-css-object-fit-object-position-properties/)

Jquery-Object-fit achieves the object-fit benefits without sacrificing the separation between content and presentation.

[See example usage of jQuery object here](http://mobnia.github.io/jquery-object-fit/)

## Main Benefits
- apply to multiple images at the same time
- Keeps content separated from presentation
- inject classes to the replaced item
- ... [add more]



```js
// with jQuery
 $('.repost_image img').jqueryObjectFit({
      replacement_element: "<div>",
      replacement_class: 'columns twelve',
      horizontal: '50%',
      vertical: '0%',
      size: 'cover',
      width: '100%',
      height: '196px'
  })
```

You can run `jqueryObjectFit()` on the same elements more than once without issues 

## Load and enable with plain HTML

```html
<script src="assets/js/jquery.js"></script>
<script src="assets/js/jquery-object-fit.js"></script>

<script>$('.repost_image img').jqueryObjectFit(options);</script>
```

## API

### `jqueryObjectFit(options)`

possible options properties                         | description
:---                              | :---
**`replacement element`**                      | Type: `string` *required* <br> HTML element that will replace the image element in the DOM. For example: ` <div>`.
**`width`**                      | Type: `string` *required* <br> Width of the replacement element.
**`height`**                      | Type: `string` *required* <br> Height of the replacement element.
**`replacement_class`**                        | Type: `string` *optional* <br> Layout or presentational classed to be applied on the replacement element.
**`horizontal`**                        | Type: `string` *optional* <br> css horizontal positioning for the background image.
**`vertical`**                        | Type: `string` *optional* <br> css vertical positioning for the background image.
**`size`**                        | Type: `string` *optional* <br> css background image size.

## License

MIT © [Francis Onwumere](http://twitter.com/digitalcraft)

