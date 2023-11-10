$(document).ready(function () {
  setTimeout(function () {
    $("#curtain, .loader").removeClass("on first-loading");
  }, 2500);

  $(".lazy, .lazyload-wrapper").addClass("loaded");

  $(".menu").on("click", function () {
    $("#curtain").addClass("on");
    setTimeout(function () {
      $("#nav").addClass("on transition-end");
      $("#nav-overlay-content").addClass("on transition-end");
    }, 500);
    return false;
  });

  $("nav#nav .close").on("click", function () {
    $("#nav").removeClass("transition-end");
    $("#nav-overlay-content").removeClass("on transition-end");
    $("#nav").removeClass("on");
    setTimeout(function () {
      $("#curtain").removeClass("on");
    }, 900);
    return false;
  });

  new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: { delay: 5500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: { el: ".swiper-scrollbar" },
  });

  var e = $(".swiper-pagination-bullet");
  for (let n = 0; n < e.length; n++) {
    $(e[n]).html(
      "<h4>0" +
        (n + 1) +
        '</h4><div class="swiper-bar"><div class="fill"></div></div>'
    );
  }

  function validateEmail(t) {
    return !!t.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  }

  function dfvalue() {
    $("#form-contact_email").val("");
    $("#form-contact_service").val("");
    $("#form-contact_budget").val("");
    $("#form-contact_message").val("");
  }

  $("form#form-contact").on("submit", function (t) {
    t.preventDefault();
    var e = $("#form-contact_name").val();
    var a = $("#form-contact_email").val();
    var l = $("#form-contact_service").val();
    var o = $("#form-contact_budget").val();
    var r = $("#form-contact_message").val();
    if (
      e !== "" &&
      a !== "" &&
      r !== "" &&
      o !== "" &&
      l !== "" &&
      validateEmail(a)
    ) {
      $("#send-msg").click(function () {
        $.ajax({
          url: "api/troddl.php",
          type: "POST",
          data: {
            key: "svRlOFp,ep5f2e5",
            name: e,
            email: a,
            service: l,
            budget: o,
            message: r,
          },
          dataType: "html",
          beforeSend: function () {
            $("#send-msg .regular").attr("style", "display: none;");
            $("#send-msg .sending").attr("style", "display: block;");
          },
          success: function (t) {
            $("#send-msg .sending").removeAttr("style");
            $("#send-msg .regular").attr("style", "display: block;");
            if (t === "1") {
              dfvalue();
              $(".sent").attr("style", "display: block;");
            } else {
              $(".too-many-request").attr("style", "display: block;");
              setTimeout(function () {
                $(".clearfix .error").removeAttr("style");
              }, 6000);
            }
          },
        });
      });
    } else {
      $(".form-error").attr("style", "display: block;");
    }
  });

  var n = document.body;
  var t = document.documentElement;
  Math.max(
    n.scrollHeight,
    n.offsetHeight,
    t.clientHeight,
    t.scrollHeight,
    t.offsetHeight
  );
  (scrollTop = window.pageYOffset || document.documentElement.scrollTop),
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft);
  window.onscroll = function () {
    var e, n;
    e = self.innerHeight ? self.innerHeight : document.body.clientHeight;
    n = window.pageYOffset
      ? window.pageYOffset
      : document.documentElement.scrollTop
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
    if (document.body.scrollHeight <= n + e) {
      $(".case-study-next-project").addClass("next-project-active");
    } else {
      $(".case-study-next-project").removeClass("next-project-active");
    }
  };

  // back to top button fuction

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 3000);
    return false;
  });

  // New code to change the background color of nav bar on-scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // Change the background color when the user scrolls
      $("#header").css("background-color", "rgba(255, 255, 255, 0.95)");
    } else {
      // Revert to the original background color
      $("#header").css("background-color", "transparent");
    }
  });
});
