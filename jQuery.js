function JQ(collection){
  this.length = collection.length;

  this.idx = function(num){
    return collection[num]
  };


}

function jQuery(string) {
  //
  //if typeof(string) == ojbect(dom)
  //return new JQ(string)
  //
  //
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


