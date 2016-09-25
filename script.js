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

function JQueryObject(collection) {
    this.collection = Array.prototype.slice.call( collection );
    this.length = this.collection.length;
    this.idx = function(index) {
        return this.collection[index];
    };
    this.each = function(func) {
        for (var i = 0; i < this.collection.length; i++) {
            func(this.collection[i], i);
        }
    };
    this.hasClass = function(class_name) {
        classes = this.collection[0].className.split(' ');
        for (var i = 0; i < classes.length; i++) {
            if (classes[i] === class_name) {
                return true;
            }
        }
        return false;
    };

    this.addClass = function(class_name) {
        this.each(function (element, index) {
            element.className = element.className + " " + class_name;
        });

        return this;
    };

    this.removeClass = function(class_name) {
        var class_removal_list = class_name.split(' ');

        this.each(function (element, index) {
            var element_classes = element.className.split(' ');
            var new_class_name = "";

            if (class_name) {
                for (var i = 0; i < element_classes.length; i++) {
                    if (!class_removal_list.includes(element_classes[i])) {
                        new_class_name += " " + element_classes[i];
                    }
                }
            }

            element.className = new_class_name;
        });
        return this;
    };

    this.toggleClass = function(class_name) {
        this.each(function(element, index){
            var $element = jQuery(element);
            if ($element.hasClass(class_name)) {
                $element.removeClass(class_name);
            } else {
                $element.addClass(class_name);
            }
        });
        return this;
    };

    this.val = function(value) {
        if (value) {
            this.each(function(element) {
                element.value = value;
            })
        } else {
            return this.collection[0].value
        }
    }

    this.css = function(attr, val) {
        if (val) {
            this.each(function(element) {
                element.style[attr] = val;
            });
        } else {
            return this.collection[0].style[attr];
        }
    }
    this.height = function(val) {
        if (val) {
            this.each(function(element) {
                element.style.height = val + 'px';
            });
        } else {
            if (this.collection[0].style.height) {
                return parseInt(this.collection[0].style.height);
            } else {
                return undefined
            }
        }
    }

    this.width = function(val) {
        if (val) {
            this.each(function(element) {
                element.style.width = val + 'px';
            });
        } else {
            if (this.collection[0].style.width) {
                return parseInt(this.collection[0].style.width);
            } else {
                return undefined
            }
        }
    }
}

function jQuery(selector) {
    if (selector[0] === ".") {
        return new JQueryObject(document.getElementsByClassName(selector.slice(1)));
    } else if (selector[0] === '#') {
        return new JQueryObject(document.getElementById(selector.slice(1)));
    } else if (selector instanceof HTMLElement) {
        return new JQueryObject([selector]);
    } else {
        return new JQueryObject(document.getElementsByTagName(selector));
    }
}

function $(selector) {
    return jQuery(selector);
}
