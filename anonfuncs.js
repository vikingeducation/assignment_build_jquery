var SimpleObject = function(arr, func) {
  this.collection = arr;
  this.each = function(func) {
    for (var i = 0; i < this.collection.length; i++) {
      func(this.collection[i], i);
    }
  };
}
SimpleObject.each = function(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i], i);
  }
}