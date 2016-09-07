function jQuery(selector){
  var results = []
  if(selector[0] === "."){
    //look for class
    results = document.getElementsByClassName(selector.slice(1));
  }
  else if (selector[0] === "#"){
    //look for id
    results = document.getElementById(selector.slice(1));
  }
  else{
    //look for element
    results = document.getElementsByTagName(selector);
  }

  return results;
}

