var jQuery = function(selector) {
	var collection = [];
	if (typeof selector == "string") {
		if (selector[0] == ".") {
			var className = selector.substring(1);
			collection = document.getElementsByClassName(className);
		} else if (selector[0] == "#") {
			var idName = selector.substring(1);
			collection = [document.getElementById(idName)];
		} else {
			collection = document.getElementsByTagName(selector);
		}
	} else if (document.contains(selector)) {
		collection = [selector];
	}
	var jObject = new jObj;
	jObject.col = collection;
	jObject.length = jObject.col.length;
	for (var i=0; i<collection.length; i++) {
		jObject[i] = collection[i];
	}
	return jObject;
}

function $(str){
	return jQuery(str);
};


// jQuery Object constructor (for jQuery methods)
function jObj(){
	this.hasClass = function(className){
		for (var i=0; i<this.col.length; i++) {
			if (this.col[i].classList.contains(className)) {
				return true;
			}
		}
		return false;		
	};
	this.addClass = function(className){
		for (var i=0; i<this.col.length; i++) {
			this.col[i].classList.add(className);
		}
		return this;		
	};
	this.removeClass = function(classNames){
		for (var i=0; i<this.col.length; i++) {
			this.col[i].classList.remove(classNames);
		}
		return this;		
	};
	this.toggleClass = function(className){
		for (var i=0; i<this.col.length; i++) {
			if (this.col[i].classList.contains(className)) {
				this.col[i].classList.remove(className);
			} else {
				this.col[i].classList.add(className);
			}
		}
		return this;
	};
};




