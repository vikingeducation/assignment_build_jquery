var jQuery = function(ele) {

  if (!(this instanceof jQuery)) {
    return new jQuery(ele);
  }

  this.matches = [];

  var populateCollection = function(obj, elements){
    if ( elements instanceof HTMLCollection ){
      for(var i =0; i < elements.length; i++){
        obj.matches.push(elements.item(i));
      }
    }
    else {
      obj.matches.push(elements)
    }
  };

  if( typeof ele !== 'string' ){
    if (ele instanceof HTMLCollection){
      this.matches = (ele);
    }
    else {
      this.matches.push(ele)
    }
  }
  else if ( ele[0] == "#"){
    var search = ele.slice(1);
    var matchedElements = document.getElementById(search);
    populateCollection(this, matchedElements);
  }
  else if ( ele[0] == "."){
    var search = ele.slice(1);
    var matchedElements = document.getElementsByClassName(search);
    populateCollection(this, matchedElements);
  }
  else {
    var matchedElements = document.getElementsByTagName(ele);
    populateCollection(this, matchedElements);
  };

  this.length = function() {
    return this.matches.length;
  };

  this.idx = function(index){
    return this.matches[index];
  };

}

var $ = jQuery;
