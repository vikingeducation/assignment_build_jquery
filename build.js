
var Foo = function() {
    this.weight= "heavy";
    this.test= function(){
    	console.log("I am a function");
    };

};




var Bar = function(){
	return {
	weight: "light",
	test: function(){
		console.log("I am a function");
		}

	};

};

var Baz = function() {
	if (!(this instanceof Baz)) return new Baz();
		this.weight= "heavy";
    this.test= function(){
    	console.log("I am a function");
    };
};

var SimpleObject = function() {
	this.collection = [];
	this.each = function(funct){
		var i = 0; 
	while (i < this.collection.length){
		var el = this.collection[i]
		var index = i;
	    funct(el, index);
			i++;
	};
	};




	};

SimpleObject.each = function (collection, funct) {
	var i = 0;
	while (i <collection.length){
		el = collection[i];
		index = i;
		funct (el,index);
		i++;
		};
	};

	function jQuery (string) {
		     this.collection = [];
		if (!(this instanceof jQuery)) return new jQuery(string);
		if (typeof string !== 'string') {this.collection.push(string)}
		else if (string[0] == ".") { this.collection = document.getElementsByClassName(string.slice(1))} else if (
				string[0] == "#") {this.collection = [document.getElementById(string.slice(1))]} else {
			this.collection = document.getElementsByTagName(string)};
			 this.length = this.collection.length;
			 this.idx = function(num){
			 return this.collection[num]
			 };
			 this.hasClass = function (cs) {
			 var els = document.getElementsByTagName(this);
             var classes = document.getElementsByClassName(cs);
             console.log(classes);
			 };
			 jQuery.each = function (collect) {
			 	var i = 0;
			 	var result = [];
			 	while (i < collect.length){
			 	var el = collect[i];
			 	var idx = i;
			 	i++
			 	return el;
			 	};

			 };

			};
		var $ = jQuery;	
		 
	

window.onload = jQuery;




