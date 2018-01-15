
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

window.top.onload = function() {
  $ = jQuery;

  function jQuery(selector) {
    var elements = [];

    //if (selector[0] = ".")


    var nodes = document.querySelectorAll(selector);

/*
document.querySelectorAll("tag.class");
document.getElementsByClassName(".some-class");
document.getElementById("#some-id");
document.getElementsByTagName("<some-tag> or </some-tag>");
*/

    var loopy = 0;
    while (loopy < nodes.length) {
      elements.push(nodes[loopy]);
      loopy++;
    }
    return elements;
  }
};
