function jQuery(query){
  if(this instanceof jQuery){
    
    this.object = [];
    

    if(query[0] === "."){
      query = query.split("")
      query.shift();
      query = query.join("");
      this.object.concat(document.getElementsByClassName(query));
    } else if(query[0] === "#"){
        query = query.split("")
        query.shift();
        query = query.join("");

        this.object.push(document.getElementById(query));
    } else if(typeof query === "object"){
      this.object.push(query);
    } else {
        this.object.concat(document.getElementsByTagName(query));
    };

  } else {
    return new jQuery(query);
  };

  this.length = this.object.length;
  this.idx = function(index){
    return this.object[index];
  };
};



