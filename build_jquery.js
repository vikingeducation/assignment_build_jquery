var jQuery = function (input){
  //currently returns null instead of [] if not found
  if (input[0] === "."){
    return window.document.getElementsByClassName(input.substring(1));
  }
  else if (input[0]=== '#'){
    return window.document.getElementById(input.substring(1));
  }
  else {
    return window.document.getElementsByTagName(input);
  }

};

// create jQuery obj
// constructor function

function jQueryObj(result){

}