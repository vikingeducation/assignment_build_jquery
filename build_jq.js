
/*
 cd Documents/Viking/JS/build_jq

 test = $("#fish")
*/

window.onload = function() {
  $ = jQuery;

  function jQuery(selector) {
    var elements = [];

    if (selector[0] === ".") {
      var nodes = document.getElementsByClassName(selector.substr(1));
    } else if (selector[0] === "#") {
      var nodes = document.getElementById(selector.substr(1));
    } else {
      // for html tags, also works for tag.class
      var nodes = document.querySelectorAll(selector);
    }

    if (nodes === null) {
      // no results
    } else if (nodes[0] === undefined && nodes.length === 0) {
      // empty nodelists
    } else if (nodes[0] === undefined) {
      // for ID's
      elements.push(nodes);
    } else if (nodes.length === 1) {
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
