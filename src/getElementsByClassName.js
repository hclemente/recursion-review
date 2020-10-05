// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var matchingElements = [];

  // Checks object for matching className
  // if present adds the object to the array
  var checkClassname = function (object) {
    var classes = object.classList;
    for (var key in classes) {
      if (classes[key] === className) {
        matchingElements.push(object);
        break;
      }
    }
  };

  // iterate over the childNodes of the htmlElement
  // recursively calls checkElement for each childNode
  var checkChildren = function (htmlElement) {
    var children = htmlElement.childNodes;
    for (var i = 0; i < children.length; i++) {
      checkElement(children[i]);
    }
  };

  //Checks element for matching class and for childnodes
  var checkElement = function (object) {
    checkClassname(object);
    checkChildren(object);
  };

  checkElement(document.body);

  // return results array
  return matchingElements;
};