
/*
 cd Documents/Viking/JS/build_jq
*/

/*Build the jQuery() function, which takes a string representing a CSS
selector and returns a collection of elements (or the single element) that
match it.

Add the following functionality: Note: assume only single selectors and not
chained or nested ones like ".some-class someElement"
  Classes, e.g. jQuery(".some-class")
  IDs, e.g. jQuery("#some-id")
  Elements, e.g. jQuery("div")*/
window.onload = function() {

function jQuery(selector) {
  return new selectorGet(selector);
}

function selectorGet(selector) = {
  toArray: function() {

  }
}













};
// spacing
