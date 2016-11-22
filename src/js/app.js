$(document).ready(function() {
  "use strict";

/***************** Waypoints ******************/
  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInUp');
  }, {
    offset: '90%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });
  $('.wp7').waypoint(function() {
    $('.wp7').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });
  $('.wp8').waypoint(function() {
    $('.wp8').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });
  $('.wp9').waypoint(function() {
    $('.wp9').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });
  $('.wp10').waypoint(function() {
    $('.wp10').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });

  $('.wpinstagram').waypoint(function() {
    $('.wpinstagram').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });

  $('.wpfooter').waypoint(function() {
    $('.wpfooter').addClass('animated fadeInUp');
  }, {
    offset: '90%'
  });

  $(".fancybox").fancybox({
    padding : 0
  });

  $('.fancybox-media').fancybox({
    padding: 0,
    maxWidth: 10000,
    maxHeight: 10000,
    minWidth: '70%',
    minWidth: '70%',
    aspectRatio: true,
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

  // Main Instagram Feed
  var $instagramPhotos = $('#instafeed'),
      $leftCarousel = $('.carousel-button-left'),
      $rightCarousel = $('.carousel-button-right'),
      wrapperWidth = $('.instagram-carousel').width();

  if($instagramPhotos[0]) {
    var feed = new Instafeed({
        get: 'user',
        userId: 'self',
        clientId: '06c9aae210124ed481ba3efa975340fd',
        accessToken: '1386977881.06c9aae.f11d2212e69444fb8c0e45161c8625d1',
        resolution: 'low_resolution',
        links: true
    });
    feed.run();

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
  }

  // Product page
  $('.product-details-container').stick_in_parent();

  var instafeedOdin = '#instafeed-odin',
      odinHashtag = 'odindogtoy';
  if($(instafeedOdin)[0]) {
    var feedOdin = new Instafeed({
        target: 'instafeed-odin',
        get: 'user',
        userId: 'self',
        clientId: '06c9aae210124ed481ba3efa975340fd',
        accessToken: '1386977881.06c9aae.f11d2212e69444fb8c0e45161c8625d1',
        resolution: 'thumbnail',
        links: true,
        filter: function(img) {
          return img.tags.indexOf(odinHashtag) >= 0;
        }
    });
    feedOdin.run();
  }

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

