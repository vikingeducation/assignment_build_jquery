function JQ(collection){
  this.length = collection.length;

  this.idx = function(num){
    return collection[num]
  };

  this.hasClass = function(string) {
    for (var i = 0; i < collection.length; i++) {
      var classes = collection[i].className;
      // console.log(classes)
      // var regex = ("\b*" + string + "\b*");
      // console.log("\b*" + string + "\b*");
      // if (classes == regex) return true;
      var class_arr = classes.split(" ");
      for (var j = 0; j < class_arr.length; j++) {
        if (class_arr[j] === string) {
          return true;
        }
      };
    };
    return false;
  }

  this.addClass = function(string) {
    for (var i = 0; i < collection.length; i++) {
      collection[i].className += " " + string;
    };
  }

}

var $ = jQuery;

function jQuery(string) {

  if (string == null) return new Object([]);

  if (typeof(string) === "object") {
    var jq = new JQ(string)
    if (jq.length == undefined) {
      jq.length = 1;
      jq[0] = string[0];
    } else {
      for (var i = 0; i < jq.length; i++){
        jq[i] = string[i];
      }
    }
    return jq;
  }
  var search_type = string[0];
  switch (search_type) {
    case ".":
      var arr = document.getElementsByClassName(string.slice(1,string.length));
      var jq = new JQ(arr);
      for (var i = 0; i < jq.length; i++){
        jq[i] = arr[i];
      }
      return jq;
    case "#":
      var elem = document.getElementById(string.slice(1,string.length));
      if (elem === null) {
        return new JQ();
      } else {
        var jq =  new JQ(elem);
        jq.length = 1;
        jq[0] = elem;
        return jq;
      }
    default:
      var arr = document.getElementsByTagName(string);
      var jq = new JQ(arr);
      for (var i = 0; i < jq.length; i++){
        jq[i] = arr[i];
      }
      return jq
  }
}


