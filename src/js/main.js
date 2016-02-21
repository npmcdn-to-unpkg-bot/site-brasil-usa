'use strict';

require('./track-js-errors')();

window.Tether = require('tether');
require('bootstrap');

(function ($) {
  'use strict';

  $('html').addClass('js');
} (jQuery));
