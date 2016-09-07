var jQuery = function(input) {
  var jquery_object;
  switch(input[0]) {
    case ".":
      jquery_object = document.getElementsByClassName(input.slice(1));
      break;
    case "#":
      jquery_object = document.getElementById(input.slice(1));
      break;
    default:
      jquery_object = document.getElementsByTagName(input);
      break;
  }
  return jquery_object;
}

console.log(jQuery("p").length);