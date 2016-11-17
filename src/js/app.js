$(document).ready(function() {
  "use strict";

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

  // For Sale banner
  // window.setTimeout(function() {
  //   $('.sale-banner').slideDown();
  // }, 2000);

  // $('#close-banner').click(function(e) {
  //   e.preventDefault();
  //   $('.sale-banner').slideUp();
  // });

  var feed = new Instafeed({
      get: 'user',
      userId: 'self',
      clientId: '06c9aae210124ed481ba3efa975340fd',
      accessToken: '1386977881.06c9aae.f11d2212e69444fb8c0e45161c8625d1',
      resolution: 'low_resolution',
      links: true
  });
  feed.run();

  var $instagramPhotos = $('#instafeed'),
      $leftCarousel = $('.carousel-button-left'),
      $rightCarousel = $('.carousel-button-right'),
      wrapperWidth = $('.instagram-carousel').width();

  $instagramPhotos.scroll(function() {
    if (this.scrollLeft > 0) {
      $leftCarousel.removeClass('hidden');
    } else {
      $leftCarousel.addClass('hidden');
    }

    if (($instagramPhotos[0].scrollWidth - this.scrollLeft) > wrapperWidth) {
      $rightCarousel.removeClass('hidden');
    } else {
      $rightCarousel.addClass('hidden');
    }
  });


  $leftCarousel.click( function(e) {
    var position = $instagramPhotos.scrollLeft(),
        width = $instagramPhotos.width(),
        newPosition = position - width;

    $instagramPhotos.animate({scrollLeft: newPosition}, wrapperWidth/2);
  });

  $rightCarousel.click( function(e) {
    var position = $instagramPhotos.scrollLeft(),
        width = $instagramPhotos.width(),
        newPosition = position + width;

    $instagramPhotos.animate({scrollLeft: newPosition}, wrapperWidth/2);
  });

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

