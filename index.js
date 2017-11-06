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




















