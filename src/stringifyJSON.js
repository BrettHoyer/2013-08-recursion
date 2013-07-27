// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if(typeof(obj) === 'number'){
  	return String(obj)
  } else if(obj === null){
  	return String(obj)
  } else if(typeof(obj) === "string"){
  	return "\"" + (obj) + "\""
  } else if(typeof(obj) === "boolean"){
  	return String(obj)	
  } else if(Array.isArray(obj) === true && obj.length === 0){
  	return "\[\]"
  }
   else if(Array.isArray(obj) === true && obj.length > 0){
  	return "\[" + _.map(obj, function(element){
  		if (typeof(element) === 'number'){
  			return element
  		} else if(typeof(element) === 'string'){
  			return stringifyJSON(element)
  		} else {
  			return stringifyJSON(element)
  		}
  	}) + "\]"
  } else if(typeof(obj) === "object"){
  	return "\{" + _.map(obj, function(value, key){
  			return stringifyJSON(key)+ ":" + stringifyJSON(value)
  	}) + "\}"
  }

};
