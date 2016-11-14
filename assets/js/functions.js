$( document ).ready(function() {
    
    //slide intro-box homepage
    function introSlide(){
        var introBox = $("#intro-box");
        introBox.animate({"marginLeft" : "0px"}, 1000);   
    }
    
    //zooms image homepage
    function showsZoom(){
        var image = $(".image");
        
        image.on("mouseenter", function(){
            $(this).animate({backgroundSize : "220%"}, 400); 
            $(this).addClass("img-box-shadow");
        });
        
        image.on("mouseleave", function(){
            $(this).css({"background-size" : "200%"}); 
            $(this).removeClass("img-box-shadow");
        });
    }
    
    //mobile-navigation
    
    function mobileNav(){
        var navShow = $("#mobile-bars");
        var navHide = $("#mobile-cross");
        var navUl = $('#nav-ul');
        
        navShow.on("click", function(){
            $(this).fadeOut();
            navHide.fadeIn();
            navUl.addClass('showing');
        });
        
        navHide.on("click", function(){
            $(this).fadeOut();
            navShow.fadeIn();
            navUl.removeClass('showing');
        });
    }
    
    
    //horizontal gallery slider homepage pictures section
    function horizontalGallerySlider(){
        var gallery = $("#horiz-gallery");
        var leftGallery = $("#left-gallery");
        var rightGallery = $("#right-gallery");
        var currentMargin = -50;
        
        leftGallery.on("click", function(){
            currentMargin += 25;
            gallery.animate({marginLeft: currentMargin + "vw"}, 400);
            
            if(currentMargin > -25){
                currentMargin = -25;
            }

        });
        
        rightGallery.on("click", function(){
            currentMargin -= 25;
            gallery.animate({marginLeft: currentMargin + "vw"}, 400);
            
            if(currentMargin < -75){
                currentMargin= -75;
            }
        });
    }
    
    //about page title fadein
    function fadeInTitle(){
        var title = $("#about-page-title");
        
        title.hide().fadeIn(2000);
    }
    
    //gallery lightbox
    
    function lightbox(){
        var lightboxImage = $("#lightbox-big-image");
        var lightboxWrapper = $("#lightbox");
        var galleryImage = $("#lightbox-gallery");
        var lightboxCloseButton = $("#lightbox-close");
        
        galleryImage.children().on("click", function(){
            var imgSrc = $(this).data("img");
            
            lightboxImage.css({backgroundImage: "url('assets/images/gallery-page/gallery-images/" + imgSrc + ".jpg')"});
            lightboxWrapper.hide().fadeIn(400);
            
        });
        
        lightboxCloseButton.on("click", function(){
            lightboxWrapper.show().fadeOut(400); 
        });
        
    }

    showsZoom();
    introSlide();
    mobileNav();
    
    horizontalGallerySlider();
    fadeInTitle();
    lightbox();
    
});