var jQuery = function(selector){
  var _collection = [];
  var that = this;

  if(!(this instanceof jQuery)){
    return new jQuery(selector);
  }

  this.idx = function(num){
    return _collection[num];
  };

  this.each = function(block){
    var tempCollection = _collection;
    for (var i = 0; i < tempCollection.length; i++) {
      block(tempCollection[i], i, tempCollection);
    }
  };

  this.hasClass = function(className){
    var classFlag = false;
    this.each(function(item){
      if (item.classList.contains(className)) {
        classFlag = true;
      }
    });
    return classFlag;
  };

  this.addClass = function(className){
    this.each(function(item){
      item.className += " " + className;
    });
  };

  this.removeClass = function(className){
    this.each(function(item){
      item.classList.remove(className);
    });
  };

  this.toggleClass = function(className){
    var list;
    this.each(function(item){
      list = item.classList;
      if (list.contains(className)){
        list.remove(className);
      } else {
        list.add(className);
      }
    });
  };
  // needs a form for testing
  this.val = function(newValue) {
    if (newValue) {
      that.each(function(element){
        element.value = newValue;
      });
    } else {
      return that.collection[0].value;
    }
  };

  this.css = function(cssProperty, cssValue) {
    if (cssValue) {
      that.each(function(element){
        element.style[cssProperty] = cssValue;
      });
    } else {
      return that.idx(0).style.cssName;
    }
  };

  this.height = function(newHeight) {
    if (newHeight) {
      that.each(function(element){
        element.style.height = newHeight;
      });
    } else {
      return that.idx(0).style.height;
    }
  };

  this.width = function(newWidth) {
    if (newWidth) {
      that.each(function(element){
        element.style.width = newWidth;
      });
    } else {
      return that.idx(0).style.width;
    }
  };

  this.attr = function(attrName, attrValue) {
    if (attrValue) {
      that.idx(0).setAttribute(attrName, attrValue);
    } else {
      return that.idx(0).getAttribute(attrName);
    }
  };

  this.html = function(newHTML) {
    if (newHTML) {
      that.idx(0).innerHTML = newHTML;
    } else {
      return that.idx(0).innerHTML;
    }
  };

  //getter by class, id, and name
  var tags;
  switch (selector[0]) {
    case ".":
      tags = document.getElementsByClassName(selector.slice(1, selector.length));
      break;
    case "#":
      tags = document.getElementById(selector.slice(1, selector.length));
      break;
    default:
      tags = document.getElementsByName(selector);
  }
  for (var tag = 0; tag < tags.length; tag++){
    _collection.push(tags[tag]);
  }

  return this;



};

var $ = jQuery.bind();
