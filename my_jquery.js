//Build jQueyry

var jQuery = function(options) {

  if (options == undefined) return {};


  selector = options.charAt(0)
  if (selector === ".") {
    return document.getElementsByClassName(options.slice(1));
  }
  else if (selector === "#") {
    return document.getElementById(options.slice(1));
  }
  else {
    return document.getElementsByTagName(options);
  }
}
