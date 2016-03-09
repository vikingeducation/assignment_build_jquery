

var encodeHTMLEntities(str){
  
  var char_obj = {
    <: &lt;
    >: &gt;
    &: &amp;
  }

  for (var i = 0; i < str.length; i++){
    for (var j = 0; j < char_obj.length; j++){
      if(str[i] === char_obj[j]){
         return character_object[j]
      }
    }
  }
}
  