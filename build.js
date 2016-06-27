// This returns Object instead of FooConstructor, is that okay?
function FooConstructor(){
	this.fooMethod = function(){};
	this.fooProp = "foo!";
}

// This returns Object instead of BarConstructor, is that okay?
BarConstructor = function(){
  return {barMethod: function(){},
  barProp: "bar!"}
}

function SimpleObject(){
  this.collection = [];
  this.each = function(x){this.collection.forEach(x)};
}