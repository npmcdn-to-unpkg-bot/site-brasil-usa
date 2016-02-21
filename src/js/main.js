'use strict';

require('./track-js-errors')();

window.Tether = require('tether');
require('bootstrap');

(function ($) {
  'use strict';

  $('.js-toggle-form').on('change', function() {
    $('.js-togglable-form').toggleClass('sr-only');
  });
} (jQuery));
