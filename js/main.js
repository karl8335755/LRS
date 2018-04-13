
//page fully loaded
$(document).ready(function(){
//pop-ups
  $('.characters img').click(function(){
    var x = $(this).index();
    $('.pop').css('z-index','100');
    $('.pop > div:nth-child('+(x+1)+')').css('display','inline-block')
    .animate({opacity:1},50,function(){
    });

  });
  $('.pop div span img').click(function(){
    $('.pop > div').css('display','none');
    $('.pop').css('z-index','-1');
  });
  $('.header span').click(function(){
    $('.header ul').animate({opacity:'1'},100,function(){
    });

  })
//header_bg
  $(window).scroll(function(){
      if(($(window).scrollTop() > 75) && ($(window).width()>500)){
         $("#header_bg").addClass("header_bg");
         $('.header').css('position','fixed');
         $('.header ul').css("right","10%");
         $('.header ul li').css("margin-right","135px");
      }
      else{
         $("#header_bg").removeClass("header_bg");
         $('.header').css('position','absolute');
         $('.header ul').css("right","3%");
         $('.header ul li').css("margin-right","35px");      
      }

  });

//button
  $('#rules').click(function(){
    $('#rule').toggleClass('rules');
  });
  $("a").on('click', function(event) {
    console.log(this.hash);
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

});

