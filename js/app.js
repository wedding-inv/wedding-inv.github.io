$(document).ready(function() {
  // Mengubah class "active" pada saat navigasi di klik
  // $("#navbar a").on("click", function() {
  //   $("#navbar")
  //     .find("li.active")
  //     .removeClass("active");
  //   $(this)
  //     .parent("li")
  //     .addClass("active");
  // });

  // smooth scroll dan ganti class active
  $("#nav").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.3,
    filter: "",
    easing: "swing"
  });
  // Membuat scrolling lebih halus pada saat navigasi di klik
  // $("#item1").click(function() {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#home").offset().top
  //     },
  //     1000
  //   );
  //   return false;
  // });
  // $("#item2").click(function() {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#couple").offset().top
  //     },
  //     1000
  //   );
  //   return false;
  // });
  // $("#item3").click(function() {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#event").offset().top
  //     },
  //     1000
  //   );
  //   return false;
  // });
  // $("#item4").click(function() {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#gallery").offset().top
  //     },
  //     1000
  //   );
  //   return false;
  // });
  // $("#item5").click(function() {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#quote").offset().top
  //     },
  //     1000
  //   );
  //   return false;
  // });

  // parallax effect

  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Show galeri foto
    if (wScroll > $(".galeri").offset().top - 500) {
      $(".galeri .thumbnail").each(function(i) {
        setTimeout(function() {
          $(".galeri .thumbnail")
            .eq(i)
            .addClass("show");
        }, 100 * (i + 1));
      });
    }

    if (wScroll > $(".fourth h1").offset().top - 700) {
      $(".fourth h1").addClass("show");
    }

    if (wScroll > $(".second").offset().top - 600) {
      $(".second").addClass("show");
    }

    if (wScroll > $(".third").offset().top - 600) {
      $(".third").addClass("show");
    }

    if (wScroll > $(".fifth").offset().top - 600) {
      $(".fifth").addClass("show");
    }
  });
});
