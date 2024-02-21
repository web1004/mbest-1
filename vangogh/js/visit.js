$(document).ready(function(){

    $(".nav_open").click(function(){
        $("#wrap").animate({backgroundColor:"#000064"});
    });
    $(".nav_close").click(function(){
        $("#wrap").animate({backgroundColor:"#222"},1500);
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>$(window).height()*(0.5/10)){
            $("header").css({"background":"#222","transition":"0.5s all"});
        }else{
            $("header").css({"background":"none","transition":"0.5s all"});
        }
    });

    $(".thumbs a").click(function(){
		path=$(this).attr("href"); 
		$(".largeImg>img").attr({"src":path}).hide().fadeIn();
		return false;
	});
    $("section #intro .gallery .thumbs img").hover(function(){
        $("section #intro .gallery .thumbs a img.active").removeClass("active");
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    });


});