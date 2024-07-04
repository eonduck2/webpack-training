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
var basicData = {
  hi: "\u314E\u3147",
  bye: "\u3142\u3147",
  hello: "\uC548\uB155",
  goodbye: "\uC798\uAC00"
};
var totalElement = function totalElement(obj) {
  var result = "";
  // liTags(anchorTags(`#${obj.hi}`, obj.hi));
  for (var _key in obj) {
    result += liTags(anchorTags("#".concat(_key), obj[_key]));
  }
  return result;
};
if (root instanceof HTMLElement) {
  root.innerHTML = "\n<ul>\n  ".concat(totalElement(basicData), "\n</ul>\n");
}