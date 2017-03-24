function SimpleObject() {}

SimpleObject.each = function(collection, func) {
	for (var i = 0; i < collection.length; i++) {
		func(collection[i], i);
	}
}

