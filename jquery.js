var jQuery = function(ele) {
  var matches = [];

  var populateCollection = function(elements){
    if ( elements instanceof HTMLCollection ){
      for(var i =0; i < elements.length; i++){
        matches.push(elements.item(i));
      }
    }
    else {
      matches.push(elements)
    }
  };

  var query = function(ele) {
    if ( ele[0] == "#"){
      var search = ele.slice(1);
      var matchedElements = document.getElementById(search);
      populateCollection(matchedElements);
    }
    else if ( ele[0] == "."){
      var search = ele.slice(1);
      var matchedElements = document.getElementsByClassName(search);
      populateCollection(matchedElements);
    }
    else {
      var matchedElements = document.getElementsByTagName(ele);
      populateCollection(matchedElements);
    }
  }

  this.length = matches.length;

  this.idx = function(index){
    return matches[index];
  }

  query(ele);
  return matches;
}
