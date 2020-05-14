$(function(){
   
  $('.counting').counterUp({
                delay: 10,
                time: 1000
            });
    
    
   $('.slider').slick({
       slidesToShow:1,
       slidesToScroll:1,
       arrows:true,
       nextArrow:'.right-arrow',
       prevArrow:'.left-arrow',
   });
    
    
    //preloader
     
     $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    
    
});