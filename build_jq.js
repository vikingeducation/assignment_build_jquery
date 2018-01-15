
/*1. Build the jQuery() function, which takes a string representing a CSS
selector and returns a collection of elements (or the single element) that
match it. Make this function available when your page loads so you can play
with it in the console.

2. Add the following functionality: Note: assume only single selectors and not
chained or nested ones like ".some-class someElement"
  Classes, e.g. jQuery(".some-class")
  IDs, e.g. jQuery("#some-id")
  Elements, e.g. jQuery("div")*/

window.top.onload = function() {
  $ = jQuery;

  function jQuery(selector) {
    var elements = [];
    var nodes = null;
    var term = selector.substr(1);

    if (selector[0] === ".") {
      nodes = document.getElementsByClassName(term);
    } else if (selector[0] === "#") {
      nodes = document.getElementById(term);
    } else {
      // for html tags, also works for tag.class
      nodes = document.querySelectorAll(selector);
    }

    if (nodes[0] === undefined && nodes.length === 0) {
      // empty nodelists
    } else if (nodes === null) {
      // no results
    } else if (nodes[0] === undefined) {
      // for ID's
      elements.push(nodes);
    } else if ((nodes.length = 1)) {
      // nodelists with 1 item
      elements.push(nodes[0]);
    } else {
      var indexy = 0;
      while (indexy < nodes.length) {
        elements.push(nodes[indexy]);
        indexy++;
      }
    }
    return elements;
  }
};

/*
 cd Documents/Viking/JS/build_jq
*/























// spacing
