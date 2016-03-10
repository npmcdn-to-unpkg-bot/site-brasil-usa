/*eslint-disable no-console */
/* global Flickity */

'use strict';

(function() {

// $('.js-toggle-form').on('change', function() {
//   $('.js-togglable-form').toggleClass('sr-only');
// });

/******************************************************************************/
/* MINI JQUERY */
/******************************************************************************/
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


/******************************************************************************/
/* MENU */
/******************************************************************************/
$('#open-menu').addEventListener('click', function toggleMenu() {
  toggleClass(this, 'is-active');
  toggleClass(document.documentElement, 'is-menu-open');
});


/******************************************************************************/
/* HOME SLIDER */
/******************************************************************************/
document.addEventListener('DOMContentLoaded', function() {

  if (!$('.js-slider').length) {
    return;
  }

  new Flickity('.js-slider', {
    cellAlign: 'left',
    pageDots: false
  });
});

})();
