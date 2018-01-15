
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
    var nodes = null

    if (selector[0] = ".") {
      nodes = document.getElementsByClassName(selector.substr(1));
    } else if (selector[0] = "#") {
      nodes = document.getElementById(selector.substr(1));
    } else if (selector[0] = "<") {
        if (selector[1] = "/") {
          nodes = document.getElementsByTagName(selector.slice(2, -1));
        } else {
          nodes = document.getElementsByTagName(selector.slice(1, -1));
        }
    } else {
      nodes = document.querySelectorAll(selector);
    }

/*
document.getElementsByClassName(".some-class");
document.getElementById("#some-id");
document.getElementsByTagName("<some-tag> or </some-tag>");
document.querySelectorAll("tag.class");
*/

    var loopy = 0;
    while (loopy < nodes.length) {
      elements.push(nodes[loopy]);
      loopy++;
    }
    return elements;
  }
};
