function jQuery(query){
  if(this instanceof jQuery){
    
    this.collection = [];
    

    if(query[0] === "."){
      query = query.split("")
      query.shift();
      query = query.join("");

      var elements = Array.prototype.slice.call(document.getElementsByClassName(query), 0);
      
      this.collection = this.collection.concat(elements);
    } else if(query[0] === "#"){
        query = query.split("")
        query.shift();
        query = query.join("");

        this.collection.push(document.getElementById(query));
    } else if(typeof query === "object"){
      this.collection.push(query);
    } else {
        elements = Array.prototype.slice.call(document.getElementsByTagName(query), 0);
        this.collection = this.collection.concat(elements);
    };

  } else {
    return new jQuery(query);
  };

  this.length = this.collection.length;
  this.idx = function(index){
    return this.collection[index];
  };


  function iterate(collection, callback){
    for(var i = 0; i < collection.length; i++){
      callback(collection[i], i);
    };
  };

  this.hasClass = function(name){
    var bool = false;
    iterate(this.collection, function(node){
      if(node.className === name){
        bool = true;
      };
    });
    return bool
  };


  this.addClass = function(klass){
    iterate(this.collection, function(element){
      element.classList.add(klass);
    });
    return this
  };

  this.removeClass = function(klass){
    iterate(this.collection, function(element){
      element.classList.remove(klass);
    })
  };

  this.toggleClass = function(klass){
    iterate(this.collection, function(element){
      element.classList.toggle(klass);
    });
  };

  this.val = function(content){
    if(content){
      iterate(this.collection, function(element){
        element.setAttribute('value', content)
      });
      return this;
    } else {
      return this.collection[0].value()
    };
  };

  this.css = function(property, newValue){
    if (typeof(property) === 'object') {
      iterate(this.collection, function(element){
        for(var attribute in property){
          element.style[attribute] = property[attribute];
        }
      })
      return this;
    } else if(newValue){
      iterate(this.collection, function(element){
        element.style[property] = newValue;
      })
      return this;
    } else {
      return this.collection[0].style[property];
    }
  }
//not working, returns an empty string
  this.height = function(number){
    pixelHeight = number + "px"
    if(number){
      iterate(this.collection, function(element){
        element.style.height = pixelHeight;
      })
      return this;
    } else {
      return this.collection[0].style.height;
    }
  }

//not working
  this.width = function(number){
    pixelWidth = number + "px";
    if(number){
      iterate(this.collection, function(element){
        element.style.height = pixelWidth;
      })

      return this;
    } else {

      //returns an empty string
      return this.collection[0].style.width;
    }
  }
//not working
  this.attr = function(attrName, attrValue){
    if(typeof attrName === "object"){
      iterate(this.collection, function(element){
        for(var attrKey in attrName){
          element.setAttribute(attrKey, attrName[attrKey]);
        }
      })
      return this;
    } else if(attrValue){
      iterate(this.collection, function(element){
        element.setAttribute(attrName, attrValue);
      })

      return this;
    } else {
      return this.collection[0].getAttribute(attrName);
    }
  }

//works
  this.html = function(text){
    if(text){
      iterate(this.collection, function(element){
        element.innerHTML = text;
      })
      return this;
    } else {
      return this.collection[0].innerHTML;
    }
  }


};




var $ = function(selector){
  return jQuery(selector);
};

