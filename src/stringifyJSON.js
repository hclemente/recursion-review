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
    //create a string
    var arrayString = '[';
    //iterate over array
    for (var i = 0; i < obj.length; i++) {
      //call stringify in each iteration
      arrayString += stringifyJSON(obj[i]);
      //TODO: figure out middle of array;
    }
    return arrayString + ']';
  }
};