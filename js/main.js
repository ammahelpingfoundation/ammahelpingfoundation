$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
          $(".navbar-dark").css("background" , "#333");
        }
        else {
            $(".navbar-dark").css("background" , "transparent");
        }
    });
  });

  