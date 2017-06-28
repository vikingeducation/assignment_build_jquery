function jQuery(selector) {
  let selection
  console.log(selector);

   if (selector[0] === '.') {
     // select on class
     selection = document.getElementsByClassName(selector.substring(1));
     console.log('class');

   } else if (selector[0] === '#') {
     // select on id
     selection = document.getElementById(selector.substring(1));
     console.log('id');

   } else {
     // select on element
     selection = document.getElementsByTagName(selector);
     console.log('element');
   }


   return selection;
}
