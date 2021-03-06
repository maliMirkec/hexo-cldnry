const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();

// {% cloudinary src false|sizes [alt] [class] %}
function cldnryTagRender(args) {
  if (!args[0]) {
    return "";
  }

  let this_cloud_name = process.env.CLDNRY_CLOUD_NAME;

  if (!this_cloud_name && this.site && this.site.data && this.site.data.cldnry && this.site.data.cldnry.cloud_name) {
    cloud_name = this.site.data.cldnry.cloud_name
  }

  if (!this_cloud_name) {
    return "";
  }

  let this_api_key = process.env.CLDNRY_API_KEY;

  if (!this_api_key && this.site && this.site.data && this.site.data.cldnry && this.site.data.cldnry.api_key) {
    api_key = this.site.data.cldnry.api_key
  }

  if (!this_api_key) {
    return "";
  }

  let this_api_secret = process.env.CLDNRY_API_SECRET;

  if (!this_api_secret && this.site && this.site.data && this.site.data.cldnry && this.site.data.cldnry.api_secret) {
    api_secret = this.site.data.cldnry.api_secret
  }

  if (!this_api_secret) {
    return "";
  }

  const imgName = args[0];

  const imgAlt = args[1] || "";

  const imgClass = args[2] || "";

  const imgPlaceholder = args[3] || "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAQAAABeK7cBAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=";

  cloudinary.config({
    cloud_name: this_cloud_name,
    api_key: this_api_key,
    api_secret: this_api_secret
  });

  return cloudinary.image(imgName, {
    secure: "true",
    width: "auto",
    dpr: "auto",
    responsive: "true",
    crop: "scale",
    fetch_format: "auto",
    quality: "auto:eco",
    responsive_placeholder: imgPlaceholder,
    alt: imgAlt,
    class: imgClass
  });
}

if (typeof module !== 'undefined' && module.exports != null) {
  exports.cldnryTagRender = cldnryTagRender;
}
