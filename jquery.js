function jQuery(input){
  this.collection = {
    idx: function(index){
      return jQuery(this[index])
    },

    each: function(callback){
      for (var i=0; i<this.collection.length; i++){
        element = this.collection[i]
        callback(element, i)
      }
    },

    hasClass: function(className){
      for (var i=0; i<this[0].classList.length; i++){
        if (this[0].classList[i] === className){
          return true
        }
      }
      return false
    },

    addClass: function(className){
      this[0].classList.add(className);
      return this
    },

    removeClass: function(className){
      this[0].classList.remove(className);
      return this
    },

    toggleClass: function(className){
      this[0].classList.toggle(className);
      return this
    },

    val: function(){
      return this[0].value
    },

    css: function(prop, val){
      if (val === undefined){
        return this[0].style[prop];
      } else {
        this[0].style[prop] = val;
        return this;
      }
    },

    height: function(prop){
      if (prop === undefined){
        return this[0].clientHeight
      } else {
        this[0].style.height = prop;
        return this
      }
    },

    width: function(prop){
      if (prop === undefined){
        return this[0].clientWidth
      } else {
        this[0].style.width = prop;
        return this
      }
    },

    attr: function(prop, val){
      if (val === undefined){
        return this[0].attributes[prop];
      } else {
        this[0].attributes[prop] = val;
        return this;
      }
    },

    html: function(prop){
      if (prop === undefined){
        return this[0].innerHTML;
      } else {
        this[0].innerHTML = prop;
        return this;
      }
    },



  }
  // takes string and locates all dom elements with that string
  // returns collection of elements
  if (typeof input === 'string') {
    if (input[0] === '#'){
      let string = input.slice(1);
      let x = document.getElementById(string);
      collection[0] = x
    } else if (input[0] === '.'){
      let string = input.slice(1);
      let selection = document.getElementsByClassName(string);
      // console.log(selection);
      for (let i=0; i<selection.length; i++){
        this.collection[i]=selection[i]
      }
    }

    else {
      let selection = document.getElementsByTagName(input);
      for (let i=0; i<selection.length; i++){
        this.collection[i]=selection[i]
      }
    }
    } else {
      this.collection[0] = input
    }

  return this.collection;
}

const $ = jQuery;
