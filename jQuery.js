function jQuery(string) {
  var search_type = string[0];
  switch (search_type) {
    case ".":
      return document.getElementsByClassName(string.slice(1,string.length));
    case "#":
      var elem = document.getElementById(string.slice(1,string.length));
      if (elem === null) {
        return [];
      } else {
        return elem;
      }
    default:
      return document.getElementsByTagName(string);
  }
}

var joQuery = {
  
}

