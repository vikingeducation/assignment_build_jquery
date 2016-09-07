// A magic index is any index in an array
// who matches its corresponding value, i.e.
// if A[4] == 4 then 4 is a magic index.

// Given a sorted array OF DISTINCT INTEGERS, write a method to
// find a magic index if one exists, otherwise
// return false.

var magic_index = function(array) {
  for (var i = 0; i < array.length; i++) {
    if (i === array[i]){
      return i;
    }
    else if (array[i] > i) {
      return false;
    }
  }
  return false;
}

var find_magic_index = function(array) {

}