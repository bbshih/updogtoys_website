"use strict";function setupWaypoints(){$(".wp1").waypoint(function(){$(".wp1").addClass("animated fadeInUp")},{offset:"80%"}),$(".wp2").waypoint(function(){$(".wp2").addClass("animated fadeInDown")},{offset:"80%"}),$(".wp3").waypoint(function(){$(".wp3").addClass("animated fadeInDown")},{offset:"80%"}),$(".wp4").waypoint(function(){$(".wp4").addClass("animated fadeInDown")},{offset:"80%"}),$(".wp5").waypoint(function(){$(".wp5").addClass("animated fadeInDown")},{offset:"80%"}),$(".wp6").waypoint(function(){$(".wp6").addClass("animated fadeInDown")},{offset:"80%"}),$(".wp7").waypoint(function(){$(".wp7").addClass("animated fadeInDown")},{offset:"80%"}),$(".wp8").waypoint(function(){$(".wp8").addClass("animated fadeInDown")},{offset:"80%"}),$(".wp9").waypoint(function(){$(".wp9").addClass("animated fadeInDown")},{offset:"80%"}),$(".wp10").waypoint(function(){$(".wp10").addClass("animated fadeInDown")},{offset:"80%"}),$(".wpinstagram").waypoint(function(){$(".wpinstagram").addClass("animated fadeInDown")},{offset:"80%"}),$(".wpfooter").waypoint(function(){$(".wpfooter").addClass("animated fadeInUp")},{offset:"90%"})}function setupFancybox(){$(".fancybox").fancybox({padding:0}),$(".fancybox-media").fancybox({padding:0,maxWidth:1e4,maxHeight:1e4,minWidth:"70%",aspectRatio:!0,helpers:{media:{youtube:{params:{autoplay:1}}}}})}function displaySaleBanner(){window.setTimeout(function(){$(".sale-banner").slideDown()},500),$("#close-banner").click(function(a){a.preventDefault(),$(".sale-banner").slideUp()})}function setupHomeIG(){var a=$("#instafeed"),t=$(".carousel-button-left"),e=$(".carousel-button-right"),n=$(".instagram-carousel").width();if(a[0]){var i=new Instafeed({get:"user",userId:"self",clientId:"06c9aae210124ed481ba3efa975340fd",accessToken:"1386977881.5efc7c5.862bdff8696545449e9a236e6c76fb08",resolution:"low_resolution",links:!0});i.run(),a.scroll(function(){this.scrollLeft>0?t.removeClass("hidden"):t.addClass("hidden"),a[0].scrollWidth-this.scrollLeft>n?e.removeClass("hidden"):e.addClass("hidden")}),t.click(function(t){var e=a.scrollLeft(),i=a.width(),s=e-i;a.animate({scrollLeft:s},n/2)}),e.click(function(t){var e=a.scrollLeft(),i=a.width(),s=e+i;a.animate({scrollLeft:s},n/2)})}}function affixProductDetails(a){if(a<768){var t=$(".product-details-container").height()+15;$(".product-photos").trigger("sticky_kit:detach"),$("footer").css("margin-bottom",t)}else $(".product-details-container").stick_in_parent(),$("footer").css("margin-bottom","")}function adjustDetailsPosition(a){if(a<768){var t=$(".product-photos").height()+30;$("#more-details").css("margin-top",t)}else $("#more-details").css("margin-top","")}function setupProductIG(a){var t="#instafeed-product";if($(t)[0]){var e=new Instafeed({target:"instafeed-product",get:"user",userId:"1386977881",clientId:"06c9aae210124ed481ba3efa975340fd",accessToken:"1386977881.5efc7c5.862bdff8696545449e9a236e6c76fb08",resolution:"thumbnail",links:!0,filter:function(t){return t.tags.indexOf(a)!=-1}});e.run()}}require("./src/js/waypoints.min.js"),require("./src/js/bootstrap.js"),require("./src/js/modernizr.js"),require("./src/js/instafeed.js"),require("./src/js/jquery.fancybox.js"),require("./src/js/jquery.fancybox-media.js"),require("./src/js/sticky-kit.min.js"),$(document).ready(function(){setupWaypoints(),setupFancybox(),displaySaleBanner(),setupHomeIG();var a=$(window).width();affixProductDetails(a),adjustDetailsPosition(a),$(window).resize(function(){a=$(window).width(),affixProductDetails(a),adjustDetailsPosition(a)});var t=$("[data-ig-tag]").data("ig-tag");setupProductIG(t)});