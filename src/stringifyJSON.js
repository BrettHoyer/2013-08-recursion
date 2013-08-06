// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if(typeof(obj) === 'number' || obj === null || typeof(obj) === 'boolean'){
    return String(obj);
  } else if(typeof(obj) === "string"){
    return "'" + (obj) + "'";
  } else if(Array.isArray(obj) && obj.length === 0){
    return "[]";
  }
   else if(Array.isArray(obj) && obj.length > 0){
    return "[" + _.map(obj, function(element){
      if (typeof(element) === 'number'){
        return element;
      } else if(typeof(element) === 'string'){
        return stringifyJSON(element);
      } else {
        return stringifyJSON(element);
      }
    }) + "]";
  } else if(typeof(obj) === "object"){ 
    var flag = false;
        _.each(obj, function(value){
      if (typeof(value) === 'undefined'){
        flag = true;
      } else if(typeof(value) === 'function' && value.call() === undefined){
        flag = true;
      }
    });
    if(flag === true){
        return "{}";
      }

    return "{" + _.map(obj, function(value, key){
        return stringifyJSON(key)+ ":" + stringifyJSON(value);
    }) + "}";
  }

};

