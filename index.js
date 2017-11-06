function Foo(){
	this.name = 'Shaka';
	this.method = () => console.log(`Boom ${this.name} Bra!`);
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





