$(document).ready(function() {
	
	//------------------------------------//
  //Owl Carousel//
  //------------------------------------//
  	$('#hero').owlCarousel({
	    loop:true,
	    mouseDrag: false,
	    autoplay:true,
	    autoplayTimeout:4000,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    responsiveClass:true,
	    items:1
	  })
	
	//------------------------------------//
  //Full Screen Menu//
  //------------------------------------//
    var menuT = $('.menu-trigger');
    	
    	menuT.on('click', function(e){
    		e.preventDefault();
    
    		var nav = $('.nav-wrapper');
    		$(this).toggleClass('close-menu');		
    
    		nav.fadeToggle(400);
    
    		if($(this).hasClass('close-menu')){
    			$('body').addClass('hide');
    		}
    		else {
    			$('body').removeClass('hide');			
    		}
    	});
    
	 
	//------------------------------------//
  //Morph Text//
  //------------------------------------// 
  $(".rotating").Morphext({
      animation: 'fadeIn',
      speed: 3000
  });
	 
	 
	//------------------------------------//
	//Scroll To Top//
	//------------------------------------// 
	        
		//Check to see if the window is top if not then display button
		$(window).scroll(function(){
			if ($(this).scrollTop() > 700) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});
		//Click event to scroll to top
		$('.scrollToTop').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
		
	
	
	//------------------------------------//
  //WOW Animation//
  //------------------------------------//
  wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false        // trigger animations on mobile devices (true is default)
    }
  );
  wow.init();
  
		
	//------------------------------------//
  //Share Button//
  //------------------------------------//
  var shareBtn = $('.connect-menu .btn');
  var shareIcons = $('.connect-menu .social');

  shareBtn.click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      shareIcons.toggleClass('active');
  });
  
  
  //------------------------------------//
  //Instafeed//
  //------------------------------------//
  var userFeed = new Instafeed({
	    get: 'user',
	    userId: 1722276123,
	    accessToken: '1722276123.467ede5.31f5233bc3834921ae58bf2aa4f74da0',
	    resolution: 'standard_resolution',
	    limit: 4,
	    template: '<li class="col-sm-3 col-xs-6"><a href="{{link}}" target="_blank" class="instagram_image"><img src="{{image}}" /><span class="insta_caption">{{caption}}</span><span class="instagram-logo"><i class="fa fa-instagram"></i></span></a></li>'
	});
	userFeed.run();
  
  
  //------------------------------------//
  //Contact//
  //------------------------------------//

     $('#contact-form').validate({
      rules: {
        name: {
          minlength: 2,
          required: true
        },
        email: {
          required: true,
          email: true
        },
        project: {
          required: true
        },
        budget: {
          required: true
        },
        message: {
          minlength: 2,
          required: true
        }
      },
      highlight: function(element) {
        $(element)
        .closest('.control-group').removeClass('success').addClass('error');
      },
      success: function(element) {
        element
        .text('\uf00c').addClass('valid')
        .closest('.form-group').removeClass('error').addClass('success');
      }
     });
      
      
    //------------------------------------//
    //Pop Overs//
    //------------------------------------// 
		    $('[data-toggle="popover"]').popover({
		        placement : 'top'
		    });
		
		
		//------------------------------------//
    //Exit Intent//
    //------------------------------------// 
		$( function() {
			bioEp.init({
	        css: 
	        '#bio_ep {height: 300px; width:100%; max-width:500px; box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.0); background-color: transparent; transform: translateX(-50%) translateY(-50%); -webkit-transform: translateX(-50%) translateY(-50%); -moz-transform:translateX(-50%) translateY(-50%);}' +
	        '#bio_ep img {margin-top: -60px;}' +
	        '#content {font-family: "Montserrat", sans-serif; font-size: 12px;}' +
	        '#bio_ep_bg {background-color: #1b7dff; opacity: 0.95;}' +
	        '#bio_ep_close {background-color: transparent; background: url("img/exit-close.svg") no-repeat scroll center center; font-size: 15px; left: 103%; margin: -20px 0 0 -12px; color: transparent;}',
			cookieExp: 0
	      });
      });
      
      
    
		//------------------------------------//
    //Page Animations//
    //------------------------------------//
		  $(".animsition").animsition({
		  
		    inClass               :   'fade-in',
		    outClass              :   'fade-out',
		    inDuration            :    1000,
		    outDuration           :    800,
		    linkElement           :   'a:not([target="_blank"]):not([href^=#])',
		    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
		    loading               :    true,
		    loadingParentElement  :   'body', //animsition wrapper element
		    loadingClass          :   'animsition-loading',
		    unSupportCss          : [ 'animation-duration',
		                              '-webkit-animation-duration',
		                              '-o-animation-duration'
		                            ],
		    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		    
		    overlay               :   false,
		    
		    overlayClass          :   'animsition-overlay-slide',
		    overlayParentElement  :   'body'
		  });



		    
  
});



//------------------------------------//
//Portfolio Filter//
//------------------------------------//
	$(window).load(function(){
		$( function() {
		  // init Isotope
		  var $container = $('.isotope').isotope({
		    itemSelector: '.element-item',
		    layoutMode: 'masonry'
		  });
		  // filter functions
		  var filterFns = {
		    // show if number is greater than 50
		    numberGreaterThan50: function() {
		      var number = $(this).find('.number').text();
		      return parseInt( number, 10 ) > 50;
		    },
		    // show if name ends with -ium
		    ium: function() {
		      var name = $(this).find('.name').text();
		      return name.match( /ium$/ );
		    }
		  };
		  // bind filter button click
		  $('#filters').on( 'click', 'button', function() {
		    var filterValue = $( this ).attr('data-filter');
		    // use filterFn if matches value
		    filterValue = filterFns[ filterValue ] || filterValue;
		    $container.isotope({ filter: filterValue });
		  });
		  // change is-checked class on buttons
		  $('.button-group').each( function( i, buttonGroup ) {
		    var $buttonGroup = $( buttonGroup );
		    $buttonGroup.on( 'click', 'button', function() {
		      $buttonGroup.find('.is-checked').removeClass('is-checked');
		      $( this ).addClass('is-checked');
		    });
		  });
		
		});
	});
	
	
  