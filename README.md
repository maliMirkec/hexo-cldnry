# Hexo Cloudinary SDK

> [Hexo] tag to add an image from [Cloudinary] using [Cloudinary SDK].

## Install

Install using [npm][npm-url].

```console
npm install hexo-cldnry --save
```

Install using [yarn][yarn-url].

```console
yarn add hexo-cldnry
```

Then register for [Cloudinary], if you haven't already.

Add `cldnry.yml` file inside `source/_data` folder. Add the following information:

```yml
cloud_name: YOUR_CLOUD_NAME
api_key: YOUR_API_KEY
api_secret: YOUR_API_SECRET
```

> Make sure `site.data.cldnry.cloud_name` data is available in your templates.

## Usage

**Step 1:** Add cldnry tag where you want to load the image.

```md
{% cldnry img_name [alt] [class] [placeholder] %}
```

where:

- `img_name` - name of the image from Cloudinary
- `alt` - image title (optional)
- `class` - custom class (optional)
- `placeholder` - custom placeholder image (optional)

**Step 2:** Add cldnry_shrinkwrap script before closing `body` tag.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/cloudinary-core/2.8.1/cloudinary-core-shrinkwrap.js")></script>
<script>
var cl = cloudinary.Cloudinary.new({cloud_name: "YOUR_CLOUD_NAME"});
cl.responsive();
</script>
```

## Example

```md
{% cldnry "IMAGE_NAME.png" "My image title" "my-image-class" "MY_PLACEHOLDER.png" %}
```

```html
<img class="cld-responsive my-image-class"
  data-src="https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_auto,dpr_auto,c_scale/IMAGE_NAME.png"
  src="MY_PLACEHOLDER.png"
  alt="My image title"/>
```

## License

MIT

[homepage]: https://github.com/maliMirkec/hexo-cldnry
[hexo-cldnry-link]: https://github.com/maliMirkec/hexo-cldnry

[npm-url]: https://npmjs.org/package/hexo-cldnry

[yarn-url]: https://yarnpkg.com/en/package/hexo-cldnry

[depstat-url]: https://gemnasium.com/maliMirkec/hexo-cldnry
[depstat-image]: http://img.shields.io/gemnasium/maliMirkec/hexo-∏cloudinary.svg?style=flat

[Cloudinary]: https://cloudinary.com/documentation/cloudinary_get_started
[Cloudinary SDK]: https://cloudinary.com/documentation/responsive_images#sdk_support

[Hexo]: http://hexo.io/
[Cloudinary]: http://cloudinary.com/
