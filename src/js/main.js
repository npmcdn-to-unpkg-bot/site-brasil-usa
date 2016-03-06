'use strict';

require('./track-js-errors')();


(function ($) {
  'use strict';

  $('.js-toggle-form').on('change', function() {
    $('.js-togglable-form').toggleClass('sr-only');
  });
} (jQuery));
