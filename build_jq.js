
/*
 cd Documents/Viking/JS/build_jq

 test = $("#fish")
*/

window.onload = function() {
  $ = jQuery;

  function jQuery(selector) {
    var elements = [];

    switch (selector[0]) {
      case ".":
        var nodes = document.getElementsByClassName(selector.substr(1));
      break;
      case "#":
        var nodes = document.getElementById(selector.substr(1));
      break;
      default:
        var nodes = document.querySelectorAll(selector);
        // for html tags, also works for tag.class
    }

    switch (true) {
      case nodes === null:
        // no results
      break;
      case nodes[0] === undefined && nodes.length === 0:
        // empty nodelists
      break;
      case nodes[0] === undefined:
        elements.push(nodes);
        // for ID's
      break;
      case nodes.length === 1:
        elements.push(nodes[0]);
        // nodelists with 1 item
      break;
      default:
        var indexy = 0;
        while (indexy < nodes.length) {
          elements.push(nodes[indexy]);
          indexy++;
        }
    }

    return elements;
  }


};
