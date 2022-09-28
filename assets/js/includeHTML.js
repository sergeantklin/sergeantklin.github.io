(function includeHTML() {
  var allElements, el, file, xhttp;

  /* Loop through a collection of all HTML elements: */
  var allElements = document.getElementsByTagName("*");
  for (var i = 0; i < allElements.length; i++) {
    el = allElements[i];
    /*search for  elements with a certain atrribute:*/
    file = el.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */

      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            el.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            el.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          el.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
})();
