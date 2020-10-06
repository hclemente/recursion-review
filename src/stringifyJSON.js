// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (Array.isArray(obj)) {
    // Empty Array Case
    if (obj.length === 0) {
      return '[]';
    }
    //create a string to add Arrays
    var arrayString = '[';
    // Multiple Array Values (trailing comma issue)
    for (var i = 0; i < obj.length - 1; i++) {
      //call stringify in each iteration
      arrayString += stringifyJSON(obj[i]) + ',';
    }
    arrayString += stringifyJSON(obj[obj.length - 1]);
    return arrayString + ']';
  } else {
    // Object Case
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    var objectString = '{';
    for (var key in obj) {
      if (obj[key] === undefined) {

      } else if (!_.isFunction(obj[key])) {
        objectString += `${stringifyJSON(key)}:${stringifyJSON(obj[key])},`;
      } else {
        objectString += '@';
      }
    }
    objectString = objectString.substring( 0, objectString.length - 1 );
    return objectString + '}';
  }

};