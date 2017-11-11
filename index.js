// Class
class FooBar {
	constructor(){
		this.name = 'FooBar class';
	}
	method(){
		console.log(`This is the ${this.name}`);
	}
}

let foobar = new FooBar();
console.log(foobar instanceof Object);
//=> true
console.log(foobar instanceof FooBar);
//=> true
foobar.method();



// Constructor
function Foo(){
	this.name = 'Foo Constructor';
	this.method = () => console.log(`This is the ${this.name}`);;
}

var foo = new Foo();
console.log(foo instanceof Object);
//=> true
console.log(foo instanceof Foo);
//=> true
foo.method();



// Function that returns simple object
let Bar = function(){
	let shaka = {
		name: 'Boom Shake Shake The Room',
		method: () => console.log(`Boom ${shaka.name}`)
	}
	return shaka
}

var bar = Bar();
console.log(bar instanceof Object);
//=> true
console.log(bar instanceof Bar);
//=> false
bar.method();




// Constructor Baz can be invoked without new keyword
function Baz(){
	this.name = 'Baz Constructor';
	if(!(this instanceof Baz)){
		return new Baz();
	}
}

var baz = new Baz();
console.log(baz instanceof Baz);
//=> true

baz = Baz();
console.log(baz instanceof Baz);
//=> true




// Constructor with method that can take callback and other arguments
function SimpleObject(){
	this.collection = [];
	this.each = (...args) => {
		// let callback equal last argument if it is a function
		let callback = (args[args.length - 1] instanceof Function) ? args[args.length - 1] : null;
		// this.collection = first argument if it is an array
		this.collection = (args[0] instanceof Array) ? args[0]: this.collection;
		// loop through each item in collection and invoke callback
		this.collection.forEach(callback);
	}
}

myObj = new SimpleObject();

// Callback only
myObj.collection = [1,"foo",3];
myObj.each( function( el, index ) {
  console.log( "Item " + index + " is " + el);
});
// Item 0 is 1
// Item 1 is foo
// Item 2 is 3


// Callback and collection
let collection = ['foo', 'bar', 'fiz', 'baz'];
myObj.each(collection, function(el, index) {
  console.log( "Item " + index + " is " + el);
});
// Item 0 is foo
// Item 1 is bar
// Item 2 is fiz
// Item 3 is baz








// BUILD JQUERY

function $(el){
	// return new instance of $ so we don't have to use the new keyword
	if(!(this instanceof $)){
		return new $(el);	
	} 

	this.selector = el;
	this.collection = [];

	// assign DOM element to collection array
	if(typeof this.selector === 'string'){
		// get DOM element passed as parameter
		if(this.selector.charAt(0) === '#'){
			let el = this.selector.slice(1);
			this.collection.push(document.getElementById(el));
		} else {
			this.collection = document.querySelectorAll(this.selector);
		}
	} else {
		this.collection.push(this.selector);
	}

	// collection length property
	this.length = this.collection.length;

	// collection index property
	this.index = (i) => this.collection[i];

	// loop through each item in collection
	this.each = (array, callback) => {
		array.forEach(callback)
	}

	// !!! doesn't work for more than one selector
	this.hasClass = (className) => {
		let hasClass;
		this.each(this.collection, (el, i) => {
			hasClass = el.classList.contains(className);
		})
		return hasClass
	}

	this.addClass = (className) => {
		this.each(this.collection, (el, i) => {
			(this.hasClass(className) ? false : el.classList.add(className));
		})
	}	

	this.removeClass = (className) => {
		this.each(this.collection, (el, i) => {
			(this.hasClass(className) ? el.classList.remove(className) : false);
		})
	}

	this.toggleClass = (className) => {
		this.each(this.collection, (el, i) => {
			(this.hasClass(className) ? el.classList.remove(className) : el.classList.add(className));
		})
	}

	this.val = (value) => {
		this.each(this.collection, (el, i) => {
			if(value){
				el.innerText = value;
			} else {
				value = el.innerText;
			}
		})
		return value;
	}



}

let el = $('h1');













