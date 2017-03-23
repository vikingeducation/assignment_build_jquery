function Foo() {
	this.prop = "I'm a prop";
	this.func = function(){console.log("I'm a method");}
}

function Bar() {
	newObj = {};
	constructor = function(){
		this.prop = "I'm a prop";
		this.func = function(){console.log("I'm a method");}
	}
	constructor.call(newObj);
	return newObj;
}


function Baz() {
	if (!(this instanceof Baz)) {return new Baz()}
	this.prop = "I'm a prop";
	this.func = function(){console.log("I'm a method");}	 
}

