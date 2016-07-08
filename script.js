function FooConstructor() {
	this.name = "FooYa";
	this.sing = function() {
		console.log("lalalalalala lala");
	};
}

function BarConstructor() {
	var obj = {
		name:  "FooYa",
		sing: function() {
			console.log("lalalalalala lala");
		}
	}
	if(!(this instanceof BarConstructor)) {
		return new BarConstructor();
	}
}


function SimpleObject() {
	this.collection = [],
	this.each = function(function_params) {
		for(var i = 0; i < this.collection.length; i++) {
			var el = this.collection[i],
			    index = i;
			function_params(el, i);
		}
	}
}
SimpleObject.each = function(collection, function_params) {
	for (var i = 0; i < collection.length; i++) {
		var el = collection[i],
			index = i;

		function_params(el, index);
	}
}


function jQuery(query) {
	var result;
	var collection;
	if (typeof query === "object") {
		result = Array( query );	
	} else {
		switch (query[0]) {
			case "." :
				result = document.getElementsByClassName(query.slice(1));
				break;
			case "#" :
				result = Array( document.getElementById(query.slice(1)) );
				break;
			default :
				result = document.getElementsByTagName(query);
		}
	}

	var compileResults = (function() {
		return collection = result;
	})();

	var jQueryObject = {
		collection: collection,
		length: collection.length,
		idx: function(index) {
			return collection[index];
		},

		each: function(function_params) {
			for (var i = 0; i < collection.length; i++) {
				var el = collection[i],
					index = i;
				// console.log(el);
				function_params(index, el);
			}
		},

		hasClass: function(params) {
			var match = false;
			this.each( function(i, el) {
				var classNames = el.className.split(" ");
				for (var j = 0; j < classNames.length; j++) {
					if (classNames[j] === params) {
						match = true;
						break;
					}
				}

			});
			if (match === true) {
				return true;
			} else {
				return false;
			}
		},

		addClass: function(params) {
			this.each(function(i, el) {
				el.className += " " + params;
			});
		},

		removeClass: function(params) {
			this.each(function(i, el) {
				var elClasses = (" " + el.className + " ");
				params = " " + params + " "
				if (elClasses.indexOf(params) > -1) {
					elClasses = elClasses.replace(params, "");
					el.className = elClasses;
				}
			});
		},

		toggleClass: function(params) {
			if (this.hasClass(params)) {
				this.removeClass(params);
			} else {
				this.addClass(params);
			}
		},

		val: function(param) {
			if (param === undefined) {
				var value = this.collection[0].value
				return value;

			} else {
				this.each(function(i, el) {
					return el.value = param;
				});
			}
		},

		css: function(key, value) {
			if (value === undefined) {
				var el = this.collection[0];
				var style = window.getComputedStyle(el);
				return style.getPropertyValue(key);

			} else {
				this.each(function(i, el) {	
					el.style[key] = value;
					return true;
				});
			}
		},

		height: function(value) {
			if (value === undefined) {
				var el = this.collection[0];
				var height = el.clientHeight;
				return height;

			} else {
				this.each(function(i, el) {	
					el.style["height"] = value;
					return true;
				});
			}
		},

		width: function(value) {
			if (value === undefined) {
				var el = this.collection[0];
				var width = el.clientWidth;
				return width;

			} else {
				this.each(function(i, el) {	
					el.style["width"] = value;
					return true;
				});
			}
		},

		attr: function(key, value) {
			if (value === undefined) {
				var el = this.collection[0];
				var attr = el.getAttribute(key);
				return attr;

			} else {
				this.each(function(i, el) {	
					el.setAttribute(key, value);
					return true;
				});
			}
		},

		html: function(value) {
			if (value === undefined) {
				var el = this.collection[0];
				var html = el.innerHTML;
				return html;

			} else {
				var el = this.collection[0];
				var html = el.innerHTML = value;
				return true;
			}
		}
	}


	return jQueryObject;

};

function $(query) {
	return jQuery(query);
}

