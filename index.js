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

if ($(window).width(); > "756px") {
  $(".mobileLinks").addClass("hide");
}
