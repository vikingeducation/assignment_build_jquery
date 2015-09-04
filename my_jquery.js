var jQuery = function(string) {
  var collection = []
  if (string[0] === '.') {
    // find by class
    collection = document.getElementsByClassName(string.substring(1, string.length));
  }
  else if (string[0] === '#') {
    // find by id
    collection = document.getElementById(string.substring(1, string.length));
  }
  else {
    // find by element
    collection = document.getElementsByTagName(string);
  }
  return collection;
}