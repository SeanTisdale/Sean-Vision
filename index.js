function mobileClick() {
  $(".dropdown").click(function () {
    if ($(".mobileLinks").hasClass("hide")) {
      $(".mobileLinks").removeClass("hide");
    } else {
      $(".mobileLinks").addClass("hide");
    }
  });
}

mobileClick();
