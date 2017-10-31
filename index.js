
function Foo (name){
	console.log(this);
	this.name = name;
	this.hello = function (){
		console.log(`Hello ${this.name}`);
	};
}

var foo = new Foo();
console.log(foo instanceof Object);
//=> true
console.log(foo instanceof Foo);
//=> true

// object constructor that retuns simple annonymous object
function Bar (name){
	console.log(this);
	let obj = {
		firstName: 'Davey',
		hello: function (){
			console.log(`Hello melaka ${name}`);
		}
	}
	return obj;
}

var bar = Bar('davey');
console.log(bar instanceof Object);
//=> true
console.log(bar instanceof Bar);
//=> false
bar.hello();






