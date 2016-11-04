//Build jQueyry
var jQuery;
jQuery = function jQuery(selector) {

  var jQ = new jQueryObject();

  if (typeof(selector) === "string") {
    if (selector[0] === ".") {
      jQ.insert(document.getElementsByClassName(selector.slice(1)));
    }
    else if (selector[0] === "#") {
      jQ.insert([document.getElementById(selector.slice(1))]);
    }
    else {
      jQ.insert(document.getElementsByTagName(selector));
    }
  } else {
      jQ.insert([selector]);
  }
  return jQ;
 }

function jQueryObject() {

  this.collection = [];
  this.length = 0;

  this.idx = function(idx){
    return this.collection[idx]
  };

  this.insert = function(arr){
    for(var i = 0; i < arr.length; i++ ){
      this.collection.push(arr[i]);
      this.length += 1;
    }
  };
}
