(function ($) {
  "use strict";

  // Smooth scroll
  $("#nav .main-nav a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      600
    );
  });

  $("#back-to-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      600
    );
  });

  ///////////////////////////
  // Btn nav collapse

  $('#open-sidebar').click(function (e) {
    e.stopPropagation();
    $('#mySidenav').addClass('show-menu');
  });
  $('#close-sidebar').click(function (e) {
    e.stopPropagation();
    $('#mySidenav').removeClass('show-menu');
  });
  $('#mySidenav').click(function (e) {
    if(e.target.id != 'menu-btn' && e.target.id != 'close-sidebar' && e.target.id != 'login-btn') {
      e.stopPropagation();
    }
  });
  $('body,html').click(function (e) {
    if(e.target.id != 'menu-btn' && e.target.id != 'close-sidebar') {
      $('#mySidenav').removeClass('show-menu');
    }
  });



  ///////////////////////////
  // On Scroll
  $(window).on("scroll", function () {
    var wScroll = $(this).scrollTop();

    // Fixed nav
    wScroll > 100
      ? $("#nav").addClass("fixed-nav")
      : $("#nav").removeClass("fixed-nav");

  });

  ///////////////////////////

  $(document).ready(function () {
    //"how to use" carousel for mobiles only
    var phonesSwiper = new Swiper(".phones-swiper", {
      slidesPerView: 1,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<button class="' + className + '">' + (index + 1) + "</button>"
          );
        }
      },
      breakpoints: {
        768: {
          slidesPerView: 3
        }
      }
    });

    var postsSwiper = new Swiper(".posts-swiper", {
      loop: true,
      slidesPerView: 1,
      grabCursor: true,
      spaceBetween: 20,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 20,
      width: 280,
      autoplay: {
        delay: 7000,
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          width: 640
        },
        1024: {
          slidesPerView: 3,
          width: 1024,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0
        }
      }
    });
    var servicesSwiper = new Swiper(".services-swiper", {
      loop: true,
      slidesPerView: 1,
      grabCursor: true,
      spaceBetween: 20,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 20,
      width: 280,
      autoplay: {
        delay: 7000,
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          width: 640
        },
        1024: {
          slidesPerView: 3,
          width: 1024,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0
        }
      }
    });
  
  
    var iphoneXSwiper = new Swiper('.iphone-x-swiper', {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 3000,
      }
    })
  
  });


})(jQuery);

//mobile phone helper

var cleave = new Cleave('.mobile', {
  delimiter: ' ',
  blocks: [1, 3, 3, 4],
  uppercase: true
});