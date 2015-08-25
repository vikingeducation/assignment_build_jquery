function jQuery(arg){
	'use strict';
	if (this instanceof jQuery){
		
	}
	else{
		return new jQuery(arg);
	}

	var firstChar = arg[0] || "";
	switch (firstChar){
		case ".":
			return document.getElementsByClassName(arg.slice(1));
			break;
		case "#":
			return document.getElementById(arg.slice(1));
			break;
		default:
			return document.getElementsByTagName(arg);
		};
}