$(function() {
   // Carousel Play / Pause
   $(".carousel").carousel( { interval: 500});
   $("#carouselButton").click(function(){
      if ($("#carouselButton").children("i").hasClass("fa-pause")){
         $(".carousel").carousel("pause");
         $("#carouselButton").children("i").removeClass("fa-pause");
         $("#carouselButton").children("i").addClass("fa-play");
      } else {
         $(".carousel").carousel("cycle");
         $("#carouselButton").children("i").removeClass("fa-play");
         $("#carouselButton").children("i").addClass("fa-pause");
      }
   });

   // Login Modal
   $("#loginButton").click(function(){
      $("#loginModal").modal("show");
   })

   // Reserve Campsite Modal
   $("#reserveButton").click(function(){
      $("#reserveCampsiteModal").modal("show");
   })
});
