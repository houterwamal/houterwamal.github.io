$(document).ready(function () {
    
    $(window).scroll(function () {
        
        //parallax effect
        var wScroll = $(this).scrollTop();
    
        $("#intro-title").css({
            'transform' : 'translate (0px, ' + wScroll / 6 + '%)'
        });
        
        //navbar slidup, down
        var navBar = $('#nav-bar');
        
        if (wScroll > 680) {
            navBar.slideDown(300);
        }
        
        else {
            navBar.slideUp(300);
        }
        
        //skills grow
        if (wScroll > 600) {
            $("#office").animate({width: '100%'}, 700);
            $("#photoshop").animate({width: '100%'}, 700);
            $("#indesign").animate({width: '100%'}, 700);
            $("#illustrator").animate({width: '100%'}, 700);
            $("#lightroom").animate({width: '80%'}, 700);
            $("#muse").animate({width: '80%'}, 700);
            $("#dutch").animate({width: '100%'}, 700);
            $("#english").animate({width: '100%'}, 700);
            $("#french").animate({width: '85%'}, 700);
            $("#german").animate({width: '80%'}, 700);
        }
    
    });
    
    //start fadein
    $("#intro-overlay").hide().fadeIn(2000);
    
    //cta scrolldown
    $('#cta-go-about').click(function () {
        $("body").animate({ scrollTop: $(window).height()}, 600);
    });
    
    //Pura-gallery
    var puraImg = $('.pura-img');
    var puraBigImg = $('#pura-big-image');
    
    puraImg.on("click", function () {
        
        var imgName = $(this).attr('data-img');
        
        puraBigImg.fadeOut("slow", function(){
          puraBigImg.css("background-image","url(assets/img/projects/pura/"+ imgName +")");  
        }).fadeIn("slow");
        
    });
    
    //The vegan world
    function vegan (){
        var veganContentWrapper = $("#vegan-content-wrapper");
        var veganCircle = $(".vegan-circle");

        veganCircle.on("click", function () {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            
            var veganImgId = $(this).attr("data-img");
            $("."+ veganImgId).siblings().not('#vegan-navigation').fadeOut(600, function(){
               $("."+ veganImgId).fadeIn(600); 
            });
            
            if(!veganImgId){
                veganContentWrapper.siblings().not('#vegan-navigation').fadeOut(600, function(){
                  veganContentWrapper.fadeIn(600);  
                });
            }
            
        });   
        
    }
    
    //Sherpa Coaching
    
    function sherpa(){
        var sherpaContentWrapper = $("#sherpa-content-wrapper");
        var sherpaCircle = $(".sherpa-circle");

        sherpaCircle.on("click", function () {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            
            var sherpaImgId = $(this).attr("data-img");
            $("#"+ sherpaImgId).siblings().not('#sherpa-navigation').fadeOut(600, function(){
               $("#"+ sherpaImgId).fadeIn(600); 
            });
            
            if(!sherpaImgId){
                sherpaContentWrapper.siblings().not('#sherpa-navigation').fadeOut(600, function(){
                  sherpaContentWrapper.fadeIn(600);  
                });
            }
            
        }); 
    }
    
    sherpa();
    vegan();
});