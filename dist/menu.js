"use strict";

var root = document.getElementById("root");
var anchorTags = function anchorTags(href, textNode) {
  var result = "<a href=\"".concat(href, "\">").concat(textNode, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
root.innerHTML = "\n<ul>\n  ".concat(liTags(anchorTags("#testA", "\u314E\u3147")), "\n</ul>\n");