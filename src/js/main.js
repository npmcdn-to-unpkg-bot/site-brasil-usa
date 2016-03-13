/*eslint-disable no-console */

'use strict';

(function() {

document.documentElement.className += ' js';

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

// For use with nodelist (returned by queryselector)
function forEach(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
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
/* FAQ */
/******************************************************************************/
var $questions = $('.js-question-open');

forEach($questions,function(i, $question) {
  $question.addEventListener('click', function toggleMenu() {
    toggleClass(this, 'is-open');
  });
});

})();
