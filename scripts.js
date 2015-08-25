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
			console.log(name);
			return !!(this.elements[0].className.match(new RegExp(name, "i")))
		}
	}
	else{
		return new jQuery(arg);
	}
}

// Alias jQuery under $
$ = jQuery;
