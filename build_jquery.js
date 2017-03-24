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
	this.val = function(value){
		if (value) {
			for (var i=0; i<this.col.length; i++){
				this.col[i].setAttribute("value", value);
			}
		} else {
			return this.col[0].getAttribute("value");
		}
		return this;
	};
	this.css = function(propertyName, value){
		if (value) {
			for (var i=0; i<this.col.length; i++){
				this.col[i].style.propertyName = value;
			}
		} else {
			return this.col[0].style.propertyName;
		}
		return this;
	};
	this.height = function(value){
		if (value) {
			for (var i=0; i<this.col.length; i++){
				this.col[i].style.height = value.toString() + "px";
			}
		} else {
			return parseInt(this.col[0].style.height, 10);
		}
		return this;
	};
	this.width = function(value){
		if (value) {
			for (var i=0; i<this.col.length; i++){
				this.col[i].style.width = value.toString() + "px";
			}
		} else {
			return parseInt(this.col[0].style.width, 10);
		}
		return this;
	};	
	this.attr = function(attributeName, value){
		if (value) {
			for (var i=0; i<this.col.length; i++){
				this.col[i].setAttribute(attributeName, value);
			}
		} else {
			return this.col[0].getAttribute(attributeName);
		}
		return this;
	};
	this.html = function(htmlString){
		if (htmlString) {
			for (var i=0; i<this.col.length; i++) {
				this.col[i].innerHTML = htmlString;
			}
		} else {
			return this.col[0].innerHTML;
		}
		return this;
	};
};




