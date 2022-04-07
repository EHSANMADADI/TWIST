$(window).on("load", function () {
  $("#status").delay(450).fadeOut("slow");
  $("#preloader").delay(550).fadeOut("slow");
});


$(function () {
  $("#slider").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 3000,
    loop: true,
    autoplayHoverPause: true,
    //   nav: true,
    dots: true,
    //animateOut: 'slideOutDown',
    animateOut: 'fadeOut'

    //   navText: [
    //     '<i class="fa fa-angle-left"></i>',
    //     '<i class="fa fa-angle-right"></i>',
    //   ],
  });
});
$(function () {
  $("#Slid").owlCarousel({
    items: 4,
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    autoplayHoverPause: true,
    //   nav: true,
    // dots:true,
    //animateOut: 'slideOutDown',
    animateOut: 'fadeOut'

    //   navText: [
    //     '<i class="fa fa-angle-left"></i>',
    //     '<i class="fa fa-angle-right"></i>',
    //   ],
  });
});


$(function () {
  $(".galery").magnificPopup({
    gallery:{
      enabled: true
    },
    items: [
      {
        src: "../img/project-1.jpg",
        type: "image"
      },
      {
        src: "../img/project-4.jpg",
        type: "image"
      },
      {
        src: "../img/project-6.jpg",
        type: "image"
      },
      {
        src: "../img/project-7.jpg",
        type: "image"
      },
      {
        src: "../img/project-7.jpg",
        type: "image"
      },
      {
        src: "../img/project-2.jpg",
        type: "image"
      },
      {
        src: "../img/project-5.jpg",
        type: "image"
      },
      {
        src: "../img/project-3.jpg",
        type: "image"
      },
      {
        src: "../img/project-8.jpg",
        type: "image"
      },
      {
        src: "../img/project-9.jpg",
        type: "image"
      },
      {
        src: "../img/project-10.jpg",
        type: "image"
      },
      {
        src: "../img/project-11.jpg",
        type: "image"
      },
      {
        src: "../img/project-12.jpg",
        type: "image"
      },
    ]
  });
});


$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>500){
      $("nav").addClass("white-nav-top");

    }
    else{
      $("nav").removeClass("white-nav-top");
    }
  });
});

$(function() {
  new WOW().init();
})

// $(window).on('load', function () {
//   $("#h1").addClass("animate__fadeInDown");
 
// })


$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});