$(document).ready(function () {

	// make links with rel=external open in new window/tab
	$(function() {
        $('a[rel*=external]').click( function() {
            window.open(this.href);
            return false;
        });
    });
    
    //retina display replacements yo!
    $('img').retina();
    
    // variables for slideshow
    var slideQty, sliderOptions, boxOptions, viewportWidth;
    
    // get our viewport width
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    
    // function to check and resize the slideshow if the window is resized
    /*
    $(window).resizeComplete(function(){
        
        viewportWidth = $(window).width();

        if(viewportWidth < 700) {
            options.displaySlideQty = 1;
        } else if(viewportWidth < 970){
            options.displaySlideQty = 2;
        } else if(viewportWidth < 1280) {
            options.displaySlideQty = 3;
        } else {
            options.displaySlideQty = 4;
        }
        
        //alert(options.displaySlideQty);
        //var slider = $("#slider").bxSlider(options);
        
    });
    */
        
    if(viewportWidth < 700) {
        slideQty = 1;
    } else if(viewportWidth < 970){
        slideQty = 2;
    } else if(viewportWidth < 1280) {
        slideQty = 3;
    } else {
        slideQty = 4;
    }
    
    sliderOptions = {
        auto: true,
        pause: 8000,
        controls: false,
        displaySlideQty: slideQty,
        easing: 'swing',
        nextSelector: '#next',
        pager: true,
        pagerType: 'full',
        pagerSelector: '#pager',
        prevSelector: '#prev',
        speed: 1000,
        infiniteLoop: true,
        randomStart: true,
        autoHover: true,
        easing: 'easeOutExpo',
    };
    
    boxOptions = {
        title: true,
        maxWidth: (viewportWidth - 50) + "px",
        maxHeight: (viewportHeight - 50) + "px",
        title: function() {$(this).attr("title"); },
        scalePhotos: true,
    }
    
    $(function(){
        var slider = $("#slider").bxSlider(sliderOptions);
        var colorbox = $('.colorbox').colorbox(boxOptions);
    });
        
    
    $('#slider li') 
        .livequery(function(){ 
            $(this) 
                .hover(function() { 
                    $(this).find('p').fadeIn('slow');
                }, function() { 
                    $(this).find('p').fadeOut('slow');
                }); 
        }, function() { 
            $(this) 
                .unbind('mouseover') 
                .unbind('mouseout'); 
    });
    
    /* overlaps sidebar...
    // extend code box on hover..
    $('.highlight').hoverIntent(
        function() {
            $(this).animate({'width' : $('#wrapper').css('width') }, 800);
        },
        function() {
            $(this).animate({'width' : '100%'}, 200);
        }
    );
    */
    
    // smooth scrolling with named links
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                $target.ScrollTo(400);
                return false;
            }
        };
    });
});
