var jQuery = function(selector){
  if (selector.charAt(0) === '#') {
    return window.document.getElementById(selector.slice(1));
  } else if (selector.charAt(0) === '.') {
    return window.document.getElementsByClassName(selector.slice(1));
  } else {
    return window.document.getElementsByTagName(selector);
  }
}