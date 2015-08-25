// window.onload = function() {

  //Without this line, does not work, why?
  // window.jQuery = jQuery;
  
  function jQuery(str) {

    switch (str[0]) {
      case '.':
        return document.getElementsByClassName(str.slice(1, str.length));
      case '#':
        return document.getElementById(str.slice(1, str.length));
      default:
        return document.getElementsByTagName(str);
    }
 
  }
// };


  // var id = function(str) {
  //   return document.getElementById(str);
  // };

  // var tag = function(str) {
  //   return document.getElementsByTagName(str);
  // };

  // var className = function(str) {
  //   return document.getElementsByClassName(str);
  // };

  // this.selector = function(str) {


 // return this.result;
  // };

  // this.result = "";


