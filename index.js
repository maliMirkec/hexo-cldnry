'use strict';
var cldnryTagRender = require('./lib/cldnrytagrender.js');
hexo.extend.tag.register("cldnry", cldnryTagRender.cldnryTagRender);
