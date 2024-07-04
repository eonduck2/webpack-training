(() => {
  "use strict";
  var n = document.getElementById("root"),
    e = {
      hi: { name: "ㅎㅇ", backgroundColor: "red" },
      bye: { name: "ㅂㅇ", backgroundColor: "blue" },
      hello: { name: "안녕", backgroundColor: "orange" },
      goodbye: { name: "잘가", backgroundColor: "green" },
    };
  n instanceof HTMLElement &&
    (n.innerHTML = "\n<ul>\n  ".concat(
      (function (n) {
        var e,
          o,
          a,
          t = "";
        for (var r in n)
          t +=
            ((o = r),
            (a = n[r].name),
            (e = '<a href="#'.concat(o, '">').concat(a, "</a>")),
            "<li>".concat(e, "</li>"));
        return t;
      })(e),
      '\n</ul>\n<main id="main-target">\n</main>\n'
    ));
  var o = document.getElementById("main-target");
  window.onhashchange = function () {
    var n = window.location.hash;
    if (o instanceof HTMLElement) {
      var a = e[n.slice(1)],
        t = document.createElement("div");
      (t.style.backgroundColor = a.backgroundColor),
        (t.textContent = a.name),
        o.hasChildNodes() && o.removeChild(o.childNodes[0]),
        o.appendChild(t);
    }
  };
})();
