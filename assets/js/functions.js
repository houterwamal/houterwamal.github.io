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
            $(this).animate({backgroundSize : "150%"}, 400); 
            $(this).addClass("img-box-shadow");
        });
        
        image.on("mouseleave", function(){
            $(this).css({"background-size" : "125%"}); 
            $(this).removeClass("img-box-shadow");
        });
    }
    
    //navigation animations
    function navHover(){
        var slider = $("#nav-ul li a");
        
        slider.on("mouseenter", function(){
            $(this).children().not(".logo").addClass("selected-li").animate({
            width: "50%"}, 400);
        });
        
        slider.on("mouseleave", function(){
           $(this).children().animate({width: "0%"}, 400).removeClass("selected-li").clearQueue();
        });
    }
    
    //horizontal gallery slider homepage pictures section
    function horizontalGallerySlider(){
        var gallery = $("#horiz-gallery");
        var leftGallery = $("#left-gallery");
        var rightGallery = $("#right-gallery");
        var currentMargin = -800;
        
        leftGallery.on("click", function(){
            currentMargin += 400;
            gallery.animate({marginLeft: currentMargin + "px"}, 400);
            
            if(currentMargin > -400){
                currentMargin = -400;
            }

        });
        
        rightGallery.on("click", function(){
            currentMargin -= 400;
            gallery.animate({marginLeft: currentMargin + "px"}, 400);
            
            if(currentMargin < -1200){
                currentMargin= -1200;
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
    navHover();
    horizontalGallerySlider();
    fadeInTitle();
    lightbox();
});