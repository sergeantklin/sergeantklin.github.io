$(document).ready(function () {
  $(document).click(function (event) {
    var isNavbarOpened = $(".navbar-collapse").hasClass("show");
    if (isNavbarOpened) {
      $("button.navbar-toggler").click();
    }
  });
});
