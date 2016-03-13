/*eslint-disable no-console */
/* global FastClick VMasker */

'use strict';

(function() {

document.documentElement.className += ' js';

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

  if (array.length < 1) { // if the array is empty, why bother?
    return;
  }

  if (!array.length) { // if the query is actually an id...
    callback.call(scope, 0, array);
    return;
  }

  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
}


/******************************************************************************/
/* FASTCLICK */
/******************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
  FastClick.attach(document.body);
}, false);


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

forEach($questions, function(i, $question) {
  $question.addEventListener('click', function toggleMenu() {
    toggleClass(this, 'is-open');
  });
});


/******************************************************************************/
/* PEDIDO */
/******************************************************************************/
var $formToggle = $('.js-toggle-form'),
    $togglableForm = $('.js-togglable-form');

forEach($formToggle, function(i, $toggler) {
  $toggler.addEventListener('change', function toggleForm() {
    forEach($togglableForm, function(i, $form) {
      toggleClass($form, 'u-hidden');
    });
  });
});


// INPUT TOGGLER
var $toggler = $('.js-toggle');

forEach($toggler, function(i, $toggler) {
  $toggler.addEventListener('change', function() {
    var target = $toggler.getAttribute('data-target'),
        $targets = $(target);

    forEach($targets, function(i, $target) {
      $target.disabled ? $target.disabled = false : $target.disabled = true;
      if ($target.value !== '') {
        $target.value = '';
      }
    });
  });
});


})();
