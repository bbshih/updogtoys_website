"use strict";
$(document).ready(function() {
  // General
  setupWaypoints();
  setupFancybox();

  displaySaleBanner();

  // Home Page
  setupHomeIG();

  // Product page
  var windowWidth = $(window).width();

  affixProductDetails(windowWidth);
  adjustDetailsPosition(windowWidth);

  $(window).resize(function() {
    windowWidth = $(window).width();

    affixProductDetails(windowWidth);
    adjustDetailsPosition(windowWidth);
  });

  setupProductIG();
});

function setupWaypoints() {
  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInUp');
  }, {
    offset: '80%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInDown');
  }, {
    offset: '80%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInDown');
  }, {
    offset: '80%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInDown');
  }, {
    offset: '80%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInDown');
  }, {
    offset: '80%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInDown');
  }, {
    offset: '80%'
  });
  $('.wp7').waypoint(function() {
    $('.wp7').addClass('animated fadeInDown');
  }, {
    offset: '80%'
  });
  $('.wp8').waypoint(function() {
    $('.wp8').addClass('animated fadeInDown');
  }, {
    offset: '80%'
  });
  $('.wp9').waypoint(function() {
    $('.wp9').addClass('animated fadeInDown');
  }, {
    offset: '80%'
  });
  $('.wp10').waypoint(function() {
    $('.wp10').addClass('animated fadeInDown');
  }, {
    offset: '80%'
  });

  $('.wpinstagram').waypoint(function() {
    $('.wpinstagram').addClass('animated fadeInDown');
  }, {
    offset: '80%'
  });

  $('.wpfooter').waypoint(function() {
    $('.wpfooter').addClass('animated fadeInUp');
  }, {
    offset: '90%'
  });
}

function setupFancybox() {
  $(".fancybox").fancybox({
    padding : 0
  });

  $('.fancybox-media').fancybox({
    padding: 0,
    maxWidth: 10000,
    maxHeight: 10000,
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
  });
}
function displaySaleBanner() {
  window.setTimeout(function() {
    $('.sale-banner').slideDown();
  }, 500);

  $('#close-banner').click(function(e) {
    e.preventDefault();
    $('.sale-banner').slideUp();
  });
}

function setupHomeIG() {
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
}

function affixProductDetails(windowWidth) {
  if (windowWidth < 768) { // 768px is tied to breakpoint in css
    var height = $('.product-details-container').height() + 15;
    $(".product-photos").trigger("sticky_kit:detach");
    $('footer').css('margin-bottom', height);
  } else {
    $('.product-details-container').stick_in_parent();
    $('footer').css('margin-bottom', '');
  }
}

function adjustDetailsPosition(windowWidth) {
  if (windowWidth < 768) { // 768px is tied to breakpoint in css
    var height = $('.product-photos').height() + 30;
    $('#more-details').css('margin-top', height);
  } else {
    $('#more-details').css('margin-top', '');
  }
}

function setupProductIG() {
  var instafeedOdin = '#instafeed-odin',
      odinHashtag = 'odindogtoy';
  if($(instafeedOdin)[0]) {
    var feedOdin = new Instafeed({
        target: 'instafeed-odin',
        get: 'user',
        userId: 'self',
        clientId: '06c9aae210124ed481ba3efa975340fd',
        accessToken: '1386977881.06c9aae.7c9ee405299e43a38cf0b7fc62d8d0b6',
        resolution: 'thumbnail',
        links: true,
        filter: function(img) {
          return img.tags.indexOf(odinHashtag) >= 0;
        }
    });
    feedOdin.run();
  }
}
