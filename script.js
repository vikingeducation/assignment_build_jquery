function FooConstructor() {
  this.value = "bar";
  this.method = function() {
    console.log("Pretty cool.");
  };
}

function BarConstructor() {
  return {
    barMethod: function() {
      console.log("Not cool.");
    },
    barProp: "foo!"
  };
}