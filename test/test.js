assert = require('assert');
cldnryTagRender = require('../lib/cldnrytagrender.js');
cheerio = require('cheerio')
var should = require('chai').should()

describe('Cheerio', function () {
  it('cheerio should work', function () {
    const $ = cheerio.load("<ul id=\"fruits\"><li class=\"apple\">Apple</li><li class=\"orange\">Orange</li><li class=\"pear\">Pear</li></ul>")
    assert.equal($('.apple').text(), 'Apple')
  })
})
describe('Hexo Cloudinary SDK Image Tag Plugin', function () {
  it('should return empty if nothing is passed', function () {
    assert.equal(cldnryTagRender.cldnryTagRender(""), '')
  })

  // it('should return an html responsive image tag', function () {
  //   html_tag = cldnryTagRender.cldnryTagRender(["image.jpg", "alt", "extra-class"])
  //   const html = cheerio.load(html_tag)

  //   console.log(html('.cld-responsive'));
  //   console.log(html('.cld-responsive').attr('data-src'));
  //   console.log(html('.cld-responsive').attr('data-src').split('/').pop());

  //   assert.equal(html('.cld-responsive').attr('data-src').split('/').pop(), 'image.jpg')
  //   assert.equal(html('.cld-responsive').attr('alt'), 'alt')
  //   assert.equal(html('.cld-responsive').attr('class'), 'cld-responsive')
  // })
})
