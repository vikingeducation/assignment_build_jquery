function FooConstructor() {
  this.value = "bar";
  this.method = function() {
    console.log("Pretty cool.");
  };
}

function BarConstructor() {
    if (this instanceof BarConstructor) {
        this.barMethod = function() {
            console.log("Not cool.");
        };
        this.barProp = "foo!";
    }
    else {
        return new BarConstructor();
    }
}

function SimpleObject() {
    this.collection = []
    this.each = function(func) {
        for (var i = 0; i < this.collection.length; i++) {
            func(this.collection[i], i);
        }
    }
}

SimpleObject.each = function(coll, func) {
    for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
    }
}


function jQuery(selector) {
    if (selector[0] === ".") {
        return document.getElementsByClassName(selector.slice(1));
    } else if (selector[0] === '#') {
        return document.getElementById(selector.slice(1));
    } else {
        return document.getElementsByTagName(selector);
    }
}
