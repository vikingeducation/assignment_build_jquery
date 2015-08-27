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
				this.elements[i].className += " " + name;
				this.elements[i].className = this.elements[i].className.replace(/^[ \t]+/, "");
			};

		};

		this.removeClass = function(name){
			for (var i = 0; i < this.elements.length; i++) {
				var cElement = this.elements[i];
				cElement.className = cElement.className.replace(new RegExp(name, "g"), "");
				// Condence pairs of 2+ spaces into one space
				cElement.className = cElement.className.replace(/[ ]{2,}/g, " ");
				// Remove trailing spaces
				cElement.className = cElement.className.replace(/[ \t]+$/, "");
				// Remove leading spaces
				cElement.className = cElement.className.replace(/^[ \t]+/, "");
			};

		};

		this.toggleClass = function(name){
			// Remove the element if the class has it, add it if it doesn't.
			for (var i = 0; i < this.elements.length; i++) {
				if (this.elements[i].className.match(new RegExp(name, "i"))) {
					var cElement = this.elements[i];
					cElement.className = cElement.className.replace(new RegExp(name, "g"), "");
					// Condence pairs of 2+ spaces into one space
					cElement.className = cElement.className.replace(/[ ]{2,}/g, " ");
					// Remove trailing spaces
					cElement.className = cElement.className.replace(/[ \t]+$/, "");
					// Remove leading spaces
					cElement.className = cElement.className.replace(/^[ \t]+/, "");
				} else {
					this.elements[i].className += " " + name;
					this.elements[i].className = this.elements[i].className.replace(/^[ \t]+/, "");
				}
			};
		};

		this.val = function(arg){
			if (arg == undefined){
				return this.elements[0].innerText;
			} else {
				for (var i = 0; i < this.elements.length; i++){
					this.elements[i].innerText = arg;
				}
			}
		};

		this.css = function(property, newVal){
			if (arguments.length == 1){
				return this.elements[0].style[property];
			} else if (arguments.length > 1){
				for (var i = 0; i < this.elements.length; i++){
					this.elements[i].style[property] = newVal;
				}
			}
		};

		this.height = function(newHeight){
			if (newHeight == undefined) {
				return this.css("height").replace(/\D+/, "")
			} else {
				for (var i = 0; i < this.elements.length; i++){
					this.elements[i].style.height = newHeight;
				}
			}
		};

		this.width = function(newWidth){
			if (newWidth == undefined) {
				return this.css("width").replace(/\D+/, "")
			} else {
				for (var i = 0; i < this.elements.length; i++){
					this.elements[i].style.width = newWidth;
				}
			}
		};

		this.on = function(type, fn){
			for (var i = 0; i < this.elements.length; i++){
				this.addEvent(this.elements[i], type, fn);
			}
		};

		this.removeOn = function(type, fn){
			for (var i = 0; i < this.elements.length; i++){
				this.removeEvent(this.elements[i], type, fn);
			}
		};

		this.addEvent = function(obj, type, fn){
	        if (obj && obj.addEventListener){
	            obj.addEventListener(type, fn, false);
	        } else if (obj && obj.attachEvent){
	            obj.attachEvent('on' + type, fn);
	        }
	    };

	    this.removeEvent: function(obj, type, fn){
	        if (obj && obj.removeEventListener){
	            obj.removeEventListener(type, fn, false);
	        } else if (obj && obj.detachEvent){
	            obj.detachEvent('on' + type, fn);
	        }
    	}

	}
	else{
		return new jQuery(arg);
	}
}

// Alias jQuery under $
$ = jQuery;
