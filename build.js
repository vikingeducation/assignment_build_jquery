var Foo = function() {
    this.weight = "heavy";
    this.test = function() {
        console.log("I am a function");
    };

};




var Bar = function() {
    return {
        weight: "light",
        test: function() {
            console.log("I am a function");
        }

    };

};

var Baz = function() {
    if (!(this instanceof Baz)) return new Baz();
    this.weight = "heavy";
    this.test = function() {
        console.log("I am a function");
    };
};

var SimpleObject = function() {
    this.collection = [];
    this.each = function(funct) {
        var i = 0;
        while (i < this.collection.length) {
            var el = this.collection[i]
            var index = i;
            funct(el, index);
            i++;
        };
    };




};

SimpleObject.each = function(collection, funct) {
    var i = 0;
    while (i < collection.length) {
        el = collection[i];
        index = i;
        funct(el, index);
        i++;
    };
};

function jQuery(string) {
    this.collection = [];


    if (!(this instanceof jQuery)) return new jQuery(string);
    if (typeof string !== 'string') {
        this.collection.push(string)
    } else if (typeof string === "string") {
        this.collection = document.querySelectorAll(string);
    } else if (string[0] == ".") {
        this.collection = document.getElementsByClassName(string.slice(1))
    } else if (
        string[0] == "#") {
        this.collection = [document.getElementById(string.slice(1))]
    } else {
        this.collection = document.getElementsByTagName(string)
    };
    this.length = this.collection.length;
    this.idx = function(num) {
        return this.collection[num]
    };
    this.hasClass = function(cs) {
        var classes = document.getElementsByClassName(cs);
        for (var i = 0; i < this.collection.length; i++) {
            if (this.collection[i] === classes[0]) {
                return true;

            }

        }
        return false;
    };

    this.addClass = function(aName) {
        var achanges = aName.split(" ");
        for (var i = 0; i < this.collection.length; i++) {
            for (var j = 0; j < achanges.length; j++) {
                this.collection[i].classList.add(achanges[j])
            };

        };

    };
    this.removeClass = function(rName) {
        var rchanges = rName.split(" ");
        for (var i = 0; i < this.collection.length; i++) {
            for (var j = 0; j < rchanges.length; j++) {
                this.collection[i].classList.remove(rchanges[j]);
            };
        };
    };
    this.toggleClass = function(cName) {
        for (var i = 0; i < this.collection.length; i++) {
            if (this.collection[i].className.includes(cName)) {
                this.collection[i].classList.remove(cName)
            } else {
                this.collection[i].classList.add(cName)
            };

        };
    };
    this.value = function(val) {
        if (val == null) {
            return this.collection[0].value;
        };
        for (var i = 0; i < this.collection.length; i++) {
            this.collection[i].value = val
            console.log(this.collection[i])
        }
    }

    this.css = function(prop, value, funct) {
        var style = getComputedStyle(this.collection[0], null);
        if (value !== undefined) {
            this.collection[0].style.setProperty(prop, value)
            console.log(getComputedStyle(this.collection[0], null)[prop])

        } else if (typeof prop === 'object') {
            for (var i = 0; i < this.collection.length; i++) {
                for (var k in prop) {
                    this.collection[i].style.setProperty(k, prop[k]);

                }
                console.log(getComputedStyle(this.collection[i], null))
            }


        } else if (value === undefined) {
            return style[prop]
        };




    }
    this.height = function(value) {
        if (value == null) {
            return (this.collection[0].innerHeight || this.collection[0].clientHeight || document.body.clientHeight)

        };


        for (var i = 0; i < this.collection.length; i++) {
            if (typeof value === 'string') {
                this.collection[i].style.height = value
            } else {
                this.collection[i].style.height = value + "px";
            };
        };

    };
    this.width = function(value) {
        if (value == null) {
            return (this.collection[0].innerWidth || this.collection[0].clientWidth || document.body.clientWidth)
        };
        for (var i = 0; i < this.collection.length; i++) {
            if (typeof value === 'string') {
                this.collection[i].style.width = value
            } else {
                this.collection[i].style.width = value + "px";
            };
        };
    };

    this.attr = function(attrName, value) {
        if (typeof attrName === "object") {
            for (var i = 0; i < this.collection.length; i++) {
                for (var k in attrName) {
                    this.collection[i].setAttribute(k, attrName[k])
                };
            };
        };
        if (value != null) {
            for (var i = 0; i < this.collection.length; i++) {
                this.collection[i].setAttribute(attrName, value)
            };
        };

        if (value == null) {
            return this.collection[0].getAttribute(attrName)
        }
    };


    this.html = function(htmlString) {
        if (htmlString == null) {
            return this.collection[0].innerHTML;
        };

        for (var i = 0; i < this.collection.length; i++) {
            this.collection[i].innerHTML = htmlString

        };

    };
};
var $ = jQuery;



window.onload = jQuery;