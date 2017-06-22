console.log("working?");

function Foo() {
	this.greeting = function() {
		console.log("hello world!");
	}
}

function Bar() {
	return {};
}

function Baz(){
   if (!(this instanceof Baz)){
        return new Baz();
   }
}

function SimpleObject() {
	
}

SimpleObject.each = function(collection, predicateFunc) {
		for (let index = 0; index < collection.length; index++) {
			predicateFunc(collection[index], index);
		}
	}

let foo = new Foo();
let bar = Bar();
let baz = Baz();
let myObj = new SimpleObject();

myObj.collection = [1, "foo", 3];
myObj.each = function(predicateFunc) {
		for (let index = 0; index < this.collection.length; index++) {
			predicateFunc(this.collection[index], index);
		}
	}

foo.greeting();

console.log(foo instanceof Object, 'foo');
console.log(foo instanceof Foo, 'foo');

console.log(bar instanceof Object, 'bar');
console.log(bar instanceof Bar, 'bar');

console.log(baz instanceof Object, 'baz');
console.log(baz instanceof Baz, 'baz');

myObj.each(function(el, index) {
	console.log( "Item " + index + " is " + el);
});

let collection = ['foo', 'bar', 'fiz', 'baz'];

SimpleObject.each(collection, function(el, index) {
  console.log( "Item " + index + " is " + el);
});

// jQuery
function jQuery(selector) {
	this.result = [];

	if (selector instanceof Node && document.body.contains(selector)) {
		this.result.push(selector);
		
	} else {
		this.result = document.querySelectorAll(selector); 
	}

	this._each = function(collection, predicateFunction) {
		for (let i = 0; i < collection.length; i++) {
			predicateFunction(collection[i]);
		}
	}

	this.length = result.length;

	this.idx = function(index) {
		return this.result[index];
	}

	this.hasClass = function(name) {
		let element = this.result[0];
		return (' ' + element.className + ' ').indexOf(' ' + name + ' ') > -1;
	}

	this.addClass = function(name) {
		if (this.hasClass(name)) {
			console.error('Class already exists!');
			return;
		}

		let element = this.result[0];
		element.classList.add(name);
		return this;
	}

	this.removeClass = function(name) {
		let element = this.result[0];
		if (this.hasClass(name)) {
			let classIndex = element.classList[name];

			element.classList.remove(name);
			console.log(element.classList);
			return this;

		} else {
			console.error("Class does not exist!");
			return;
		}
	}

	this.toggleClass = function(name) {
		let element = this.result[0];

		if (this.hasClass(name)) {
			element.classList.remove(name);

		} else {
			element.classList.add(name);
		}

		console.log(element.classList)
		return this;
	}

	this.val = function(name) {
		let element = this.result[0];

		if (arguments.length === 0) {
			console.log(element.innerHTML);
			return element.innerHTML;

		} else {
			element.innerHTML = name;
			console.log(element.innerHTML);
			return this;
		}
	}

	this.css = function(styles) {
		let element = this.result[0];
		let currentCSS = [];

		if (arguments.length === 0) {
			for (let style in element.style) {

				// filter out irrelevent attributes
				let isnum = /^\d+$/.test(style);

				if (isnum) {
					currentCSS.push(element.style[style]);
				}
			}

			return currentCSS;

		} else {

			// add new css style to element
			for (let property in styles) {
				element.style[property] = styles[property];
			}
			
			console.log(element.style.cssText)
			return this;
		}
	}

	this.height = function(value) {
		let element = this.result[0];

		if (arguments.length === 0) {
			console.log(element.style.height);
			return element.style.height;
		} else {
			// if user types number, convert properly e.g 50 -> '50px'
			if (typeof value === 'number') {
				value = value + 'px';
			}
			
			element.style.height = value;
			return this;
		}
	}

	this.width = function(value) {
		let element = this.result[0];

		if (arguments.length === 0) {
			console.log(element.style.width);
			return element.style.width;
		} else {
			if (typeof value === 'number') {
				value = value + 'px';
			}
			
			element.style.width = value;
			return this;
		}
	}

	this.attr = function(attributeName, value) {
		let element = this.result[0];

		if (arguments.length === 1) {
			console.log(element.getAttribute(attributeName));
			return element.getAttribute(attributeName);			
		} else {

			element.setAttribute(attributeName, value);
			console.log(element.getAttribute(attributeName));
			return this;
		}
	}

	this.html = function(value) {
		let element = this.result[0];

		if (arguments.length === 0) {
			console.log(element.innerHTML);
			return element.innerHTML;

		} else {
			element.innerHTML = value;
			console.log(element.innerHTML);
			return this;
		}
	}

	if (!(this instanceof jQuery)){
    return new jQuery(selector);
  }
}

let $ = jQuery;

let el = $('.plain-text');

console.log(el.length);
console.log(el.idx(0));

console.log(el.hasClass('moo'));

let someDiv = document.getElementById("some-id");

let el2 = $(someDiv);

console.log(el2.length);
console.log(el2.idx(0));

let name = el2.result[0].className;
console.log(el2.result[0].className)

console.log(el2.hasClass('moo'));

el2.addClass('george');
el2.removeClass('george');

el2.toggleClass('bounce');
el2.toggleClass('bounce');
el2.toggleClass('bounce');

el2.val('its me');
console.log(el2.css({background: 'green'}));
el2.height(100);
el2.width(200);

el2.attr('id');
el2.attr('id', 'monkey');

el2.html();
el2.html('hello. it\'s me.')







































