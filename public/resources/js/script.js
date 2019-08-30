$(document).ready (function() {
    
  /* Nav Scroll */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
    
  /* Animations on scroll */
 	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');	
	}, {
		offset: '50%'
	});
	
    $('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeInLeft');	
	}, {
		offset: '50%'
	});
    
    $('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeInRight');	
	}, {
		offset: '50%'
	});
    
    $('.js--wp-4').waypoint(function(direction){
		$('.js--wp-4').addClass('animated pulse');	
	}, {
		offset: '50%'
	});
    
    $('.js--wp-5').waypoint(function(direction){
		$('.js--wp-5').addClass('animated pulse');	
	}, {
		offset: '50%'
	});
    
    $('.js--wp-6').waypoint(function(direction){
		$('.js--wp-6').addClass('animated pulse');	
	}, {
		offset: '50%'
	});
    
    $('.js--wp-7').waypoint(function(direction){
		$('.js--wp-7').addClass('animated pulse');	
	}, {
		offset: '50%'
	});
    
  /* Mobile Nav */
  $('.js--nav-icon').click(function() {
      var nav = $('.js--main-nav'); 
      var icon = $('.js--nav-icon i');
      nav.slideToggle(200);    
      if (icon.hasClass('ion-navicon-round')) {
          icon.addClass('ion-close-round');
          icon.removeClass('ion-navicon-round');
      } else {
          icon.addClass('ion-navicon-round');
          icon.removeClass('ion-close-round'); 
      }
  });

      // Parallax
function parallaxEffect() {

  var $myWindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  $myWindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }); 

  $('.cover').each(function (index, e) {
    var $contentObj = $(this);
    var fgOffset = parseInt($contentObj.offset().top);
    var yPos;
    var speed = ($contentObj.data('speed') || 1 );

    $myWindow.on('scroll resize', function (){
      yPos = fgOffset - scrollTop / speed; 

      $contentObj.css('top', yPos);
    });
  });

  $('[data-type="background"]').each(function(){
    var $backgroundObj = $(this);
    var bgOffset = parseInt($backgroundObj.offset().top);
    var yPos;
    var coords;
    var speed = ($backgroundObj.data('speed') || 0 );

    $myWindow.on('scroll resize', function() {
      yPos = - ((scrollTop - bgOffset) / speed); 
      coords = '50% '+ yPos + 'px';

      $backgroundObj.css({ backgroundPosition: coords });
    }); 
  }); 

  $myWindow.trigger('scroll');
};

parallaxEffect();
});





