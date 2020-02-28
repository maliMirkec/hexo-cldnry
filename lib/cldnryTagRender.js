const cloudinary = require('cloudinary').v2;

// {% cloudinary src false|sizes [alt] [class] %}
function cldnryTagRender(args) {
  if (!args[0]) {
    return "";
  }

  if (!this.site || this.site.data || this.site.data.cldnry) {
    return "";
  }

  if(!this.site.data.cldnry.cloud_name || !this.site.data.cldnry.api_key || !this.site.data.cldnry.api_secret) {
    return "";
  }

  const imgName = args[0];
  const imgAlt = args[1] || "";
  const imgClass = args[2] || "";

  cloudinary.config({
    cloud_name: this.site.data.cldnry.cloud_name,
    api_key: this.site.data.cldnry.api_key,
    api_secret: this.site.data.cldnry.api_secret
  });

  return cloudinary.image(imgName, {
    width: "auto",
    dpr: "auto",
    responsive: "true",
    crop: "scale",
    responsive_placeholder: "blank",
    alt: imgAlt,
    class: imgClass
  });
}

if (typeof module !== 'undefined' && module.exports != null) {
  exports.cldnryTagRender = cldnryTagRender;
}
