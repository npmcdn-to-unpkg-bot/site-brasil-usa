/*eslint-disable no-console */

'use strict';

require('./track-js-errors')();

var $ = function(selector) {
    var selectorType = 'querySelectorAll';

    if (selector.indexOf('#') === 0) {
        selectorType = 'getElementById';
        selector = selector.substr(1, selector.length);
    }

    return document[selectorType](selector);
};

function toggleClass(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }
}

var $menuBtn = $('#open-menu');

$menuBtn.addEventListener('click', function toggleMenu() {
  toggleClass(this, 'is-active');
  toggleClass(document.documentElement, 'is-menu-open');
});



  $('.js-toggle-form').on('change', function() {
    $('.js-togglable-form').toggleClass('sr-only');
  });
