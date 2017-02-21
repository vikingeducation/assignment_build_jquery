function Foo() {
    this.sampleProp = 'Sampe Property';
    this.sampleMethod = function() {
        console.log(this.sampleProp);
    };
}
