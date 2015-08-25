function jQuery(arg){
	'use strict';
	if (this instanceof jQuery){
		this.elements = (function(e){
			// If we're sent in a collection of DOM nodes, just wrap it.
			// If we're sent in one object, put it in an array then wrap it.
			if (e instanceof Object) {
				if (e.length != null){
					return e;
				} else {
					return [e];
				}
			}

			// If the argument is a string we find the element.
			var firstChar = e[0] || "";
			switch (firstChar){
				case ".":
					return document.getElementsByClassName(e.slice(1));
					break;
				case "#":
					return [document.getElementById(e.slice(1))];
					break;
				default:
					return document.getElementsByTagName(e);
			};
		})(arg);
		this.length = this.elements.length;

		this.idx = function(pos){ return this.elements[pos] };

		this.hasClass = function(name){
			for (var i = 0; i < this.elements.length; i++) {
				if (this.elements[i].className.match(new RegExp(name, "i"))) return true;
			};
			return false;
		}

		this.addClass = function(name){
			for (var i = 0; i < this.elements.length; i++) {
				this.elements[i].className += " " + name
			};
			
		}

		this.removeClass = function(name){
			for (var i = 0; i < this.elements.length; i++) {
				this.elements[i].className.replace(new RegExp(name, "g"), "");
				this.elements[i].className.replace(/[ ]{2,}/g, " ");
				this.elements[i].className.replace(/[ \t]+/, "");
			};
			
		}

	}
	else{
		return new jQuery(arg);
	}
}

// Alias jQuery under $
$ = jQuery;
