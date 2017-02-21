function Foo() {
    this.sampleProp = 'Sampe Property';
    this.sampleMethod = function() {
        console.log(this.sampleProp);
    };
}

function Bar() {
    this.sampleProp = 'Sample Prperty';
    this.samepleMethod = function() {
        console.log(this.sampleProp);
    };
}

function Baz() {
    if( !( this instanceof Baz))
    return new Baz();
    this.sampleProp = 'Sample Property';
    this.sampleMethod = function() {
        console.log(this.sampleProp);
    };
}

function SimpleObject() {
    this.collection = [ ];
    this.each = function(passedFun){
        for( var i = 0;  i < (this.collection.length);  i ++) {
            passedFun(this.collection[i], i)
        }
    };
}
