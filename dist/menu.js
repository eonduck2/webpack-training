"use strict";

var root = document.getElementById("root");
var anchorTags = function anchorTags(href, textNode) {
  var result = "<a href=\"#".concat(href, "\">").concat(textNode, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
var basicData = {
  hi: {
    name: "\u314E\u3147",
    backgroundColor: "red"
  },
  bye: {
    name: "\u3142\u3147",
    backgroundColor: "blue"
  },
  hello: {
    name: "\uC548\uB155",
    backgroundColor: "orange"
  },
  goodbye: {
    name: "\uC798\uAC00",
    backgroundColor: "green"
  }
};
var totalElement = function totalElement(obj) {
  var result = "";
  for (var key in obj) {
    var value = obj[key];
    result += liTags(anchorTags(key, value.name));
  }
  return result;
};
if (root instanceof HTMLElement) {
  root.innerHTML = "\n<ul>\n  ".concat(totalElement(basicData), "\n</ul>\n<main id=\"main-target\">\n</main>\n");
}

/* IMPORTANT------------------------------------------------------------------------------
  NOTE: HTML을 대신해서 만든 HTML 작성 코드 - REACT/CSR
*/

var mainTarget = document.getElementById("main-target");
window.onhashchange = function () {
  var hash = window.location.hash;
  if (mainTarget instanceof HTMLElement) {
    var test = basicData[hash.slice(1)];
    var div = document.createElement("div");
    div.style.backgroundColor = test.backgroundColor;
    div.textContent = test.name;
    if (mainTarget.hasChildNodes()) {
      mainTarget.removeChild(mainTarget.childNodes[0]);
    }
    mainTarget.appendChild(div);
  }
};