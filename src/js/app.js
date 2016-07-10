//  Resize hero image
function resizeHero() {
  "use strict";

  var vHeight = $(window).height(),
      vWidth = $(window).width(),
      header = $('#header'),
      navHeight = $('.nav-container').height(),
      heroText = $('.hero-text');

  heroText.css({ top: navHeight});
  header.css({ height: vHeight, width: vWidth});
}

$(document).ready(function() {
  "use strict";
  resizeHero();

/***************** Waypoints ******************/
  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInDown');
  }, {
    offset: '55%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });

  $(".fancybox").fancybox({
    padding : 0
  });

  $('.fancybox-media').fancybox({
    padding: 0,
    helpers : {
      media: {
          youtube : {
              params : {
                  autoplay : 1
              }
          }
      }
    }
  })

  $('.reveal-overlay').click(function(e) {
    e.preventDefault();
    $('#' + this.dataset.gallery).removeClass('inactive');
  })

  window.setTimeout(function() {
    $('.sale-banner').slideDown();
  }, 2000);
});

$('#close-banner').click(function(e) {
  e.preventDefault();
  $('.sale-banner').slideUp();
});

window.onresize = function(event) {
  resizeHero();
}

// Modal

/***************** Slide-In Nav ******************/

$(window).load(function() {

  $('.nav_slide_button').click(function() {
    $('.pull').slideToggle();
  });

});

/***************** Smooth Scrolling ******************/

$(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
  this.classList.toggle("active");
});

document.querySelector("nav").addEventListener("click", function() {
  this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

