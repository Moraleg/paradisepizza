console.log('paradisepizza is connected');

$(function() {

   //Mobile Nav Slide

   $('.menu-toggle').on('click', function() {
      document.getElementById("nav").style.width = "100%";
   });

   $('.closeBtn').on('click', function() {
      document.getElementById("nav").style.width = "0%";
   });

   // $(document).ready(function() {
   //    $('.menu-toggle').click(function() {
   //       $('.overlay').toggleClass('active');
   //    });
   // });

   //Parallax
   $.stellar({ horizontalScrolling: false });

   //Scroll to top
   var link,
   toggleScrollToTop = function() {
      if($("body").scrollTop() > 0 || $("html").scrollTop() > 0){
         link.fadeIn(400);
      } else {
         link.fadeOut(400);
      }
   };
   $(document).ready(function() {
      link = $("#scroll-to-top");

      $(window).scroll(toggleScrollToTop);

      toggleScrollToTop();

      link.on("click", function() {
         $("body").animate({scrollTop: 0});
         $("html").animate({scrollTop: 0});
      });
   });


   //Section Scroll//
   // Select all links with hashes
   $('a[href*="#"]')
   // Remove links that don't actually link to anything
   .not('[href="#"]')
   .not('[href="#0"]')
   .click(function(event) {
      // On-page links
      if (
         location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
         &&
         location.hostname == this.hostname
      ) {
         // Figure out element to scroll to
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         // Does a scroll target exist?
         if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
               scrollTop: target.offset().top
            }, 2000, function() {
               // Callback after animation
               // Must change focus!
               var $target = $(target);
               $target.focus();
               if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
               } else {
                  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
               }
            });
         }
      }
   });

}); //End Window Onload


//Google maps
function initMap() {
   var uluru = {lat: 26.522071, lng: -81.897619};
   var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 16,
       center: uluru
   });
   var marker = new google.maps.Marker({
       position: uluru,
       map: map
   });
   google.maps.event.addDomListener(window, 'resize', initMap);
   google.maps.event.addDomListener(window, 'load', initMap);
}
