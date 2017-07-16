function SimpleObject() {
  return {
    collection: [1, "foo", 3],
    each: function(f) {
      for (var i = 0; i < this.collection.length; i++) {
        f(this.collection[i], i);
      }
      return this.collection;
    }
  };
}

SimpleObject.each = function(arr, f) {
  for (var i = 0; i < arr.length; i++) {
    f(arr[i], i);
  }
  return arr;
};
