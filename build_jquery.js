
var jQuery = function(selector) {
	if (!(this instanceof jQuery)) return new jQuery(selector);
	var collection = [];

	if (selector instanceof HTMLElement) {
		collection = [selector];
	} else {
		if (selector[0] === "#") {
			collection = document.getElementById(selector.slice(1));
		} else if (selector[0] === ".") {
			collection = document.getElementsByClassName(selector.slice(1));
		} else {
			collection = document.getElementsByTagName(selector);
		}
	}
	this.collection = collection;
	this.length = collection.length;

	this.idx = function(index) {
		this.collection = [collection[index]];
		this.length = this.collection.length;
		return this;
	}

	this.each = function(callback) {
		for (var i = 0; i < this.collection.length; i++) {
			callback(this.collection[i]);
		}
	}

	this.hasClass = function(klass) {
		for (var i = 0; i < this.collection.length; i++) {
			if (this.collection[i].className === klass) {
				return true;
			}
		}
		return false;
	}

	this.addClass = function(klass) {
		for (var i = 0; i < this.collection.length; i++) {
			this.collection[i].classList.add(klass);
		}
		return this;
	}

	this.removeClass = function(klass) {
		for (var i = 0; i < this.collection.length; i++) {
			this.collection[i].classList.remove(klass);
		}
		return this;
	}

	this.toggleClass = function(klass) {
		if(this.hasClass(klass)) {
			this.removeClass(klass);
		} else {
			this.addClass(klass);
		}
		return this;
	}

	this.val = function(value) {
		if (typeof value === "undefined") {
			return this.collection[0].value;
		} else {
			for (var i = 0; i < this.collection.length; i++) {
				this.collection[i].value = value;
			}
		} 
		return this;
	}

	this.css = function(property, value) {
		if (typeof value === "undefined") {
			return this.collection[0].style.property;
		} else {
			for (var i = 0; i < this.collection.length; i++) {
				this.collection[i].style.property = value;
			}
		}
		return this;
	}

	this.height = function(value) {
		if (typeof value === "undefined") {
			return this.collection[0].offsetHeight;
		} else {
			for (var i = 0; i < this.collection.length; i++) {
				this.collection[i].style.height = value + "px";
			}
		}
		return this;
	}

	this.width = function(value) {
		if (typeof value === "undefined") {
			return this.collection[0].offsetWidth;
		} else {
			for (var i = 0; i < this.collection.length; i++) {
				this.collection[i].style.width = value + "px";
			}
		}
		return this;
	}

	this.attr = function(name, value) {
		if (typeof value === "undefined") {
			return this.collection[0].getAttribute(name);
		} else {
			for (var i = 0; i < this.collection.length; i++) {
				this.collection[i].setAttribute(name, value);
			}
		}
		return this;
	}

	this.html = function(content) {
		if (typeof content === "undefined") {
			return this.collection[0].innerHTML;
		}
		else {
			for (var i = 0; i < this.collection.length; i++) {
				var newContent = document.createTextNode(content);
				this.collection[i].appendChild(newContent);
			}
		}
		return this;
	}
	
}
var $ = jQuery;




















