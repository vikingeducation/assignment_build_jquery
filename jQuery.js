var jQuery = function( selector_string ){

  var dom_objs = [];

  function single_selector( selector_string ){
    //var s = selector_string.split(" ");
    var token = selector_string.split("");
    switch ( token.shift() ) {
      case '.':
        //class
        var collection = document.getElementsByClassName( token.join("") );
        if ( collection.length ){
          for( var i = 0; i < collection.length; i++){
            dom_objs.push( collection[i] );
          }
        }else if ( collection == null ){
          //if collection is empty
        }else {
          //if collection is just a dom element
          dom_objs.push(collection);
        }
        break;
      case '#':
        //id
        var collection = document.getElementById( token.join("") );
        if ( collection.length ){
          for( var i = 0; i < collection.length; i++){
            dom_objs.push( collection[i] );
          }
        }else if ( collection == null ){
          //if collection is empty
        }else {
          //if collection is just a dom element
          dom_objs.push(collection);
        }

        break;
      default:
        //dom obj
        var collection = document.getElementsByTagName( selector_string );
        if ( collection.length ){
          for( var i = 0; i < collection.length; i++){
            dom_objs.push( collection[i] );
          }
        }else if ( collection == null ){
          //if collection is empty
        }else {
          //if collection is just a dom element
          dom_objs.push(collection);
        }

    }
  }
  function passed_dom( dom_element ){
    dom_objs.push( dom_element );
  }
  //you can pass $ a string or a dom element soo...
  if ( Object.getPrototypeOf( selector_string ) == Object.getPrototypeOf( "" ) ){
    //console.log("Stinrg")
    single_selector( selector_string );
  }else{
    //console.log("Not string");
    passed_dom( selector_string );
  }


  var jObj = {
    //properties
    selection: dom_objs,
    length: dom_objs.length,
      //methods
    idx: function( index ){
      return dom_objs[index]
    },
    each: function( collection, passed_function ){
      collection.forEach( passed_function );
    },
    hasClass: function( class_name, collection = this.selection ){
      //returns true if ANY of the objs have the class
        //allow passing in collections
      var answer = collection.some( function( element, index ){
        var class_list = element.classList.value;
        return class_list.includes( class_name )
      })
      return answer;
    },
    addClass: function( class_name, collection = this.selection ){
      this.each( collection, function( element ){
        var classes = element.className.split(" ")
        classes.push( class_name )
        var c_name = classes.join(" ");
        element.className = c_name;
      })
    },
    removeClass: function( class_name, collection = this.selection ){
      this.each( collection, function( element ){
        var classes = element.className.split(" ")
        classes = classes.filter( function( word ){
          return class_name != word
        })
        var c_name = classes.join(" ");
        element.className = c_name;
      })
    },
    toggleClass: function( class_name, collection = this.selection ){
      var has = this.hasClass;
      var add = this.addClass;
      var remove = this.removeClass;

      this.each( collection, function( element ){
        if ( has( class_name, [element] ) ){
          add( class_name, element );
        }else{
          remove( class_name, element );
        }
      })
    },
    val: function(){

    },
    height: function(){

    },
    width: function(){

    },
    attr: function(){

    },
    html: function(){
      
    }




  };

  return jObj;
}
$ = jQuery;
function selection_test(){
  //test with class
  var $duck = $(".duck");
  console.log( $duck.length )
  console.log( $duck.idx(0) )

  console.log("===================")

  //test with id
  var $waldo = $("#Waldo");
  console.log( $waldo.length )
  console.log( $waldo.idx(0) )
  console.log("===================")

  //test with tag
  var $div = $("div");
  console.log( $div.length )
  console.log( $div.idx(0) )
  console.log("===================")


  //test with dom element
  var someDiv = document.getElementById("feather")
  var $feather = $(someDiv);
  console.log( $feather.length );
  console.log( $feather.idx(0) );
  console.log("===================")
}

//selection_test();
var $div = $("div");









///////
