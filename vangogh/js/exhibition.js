$(document).ready(function(){

    $(".black").click(function(){
        $(".black").hide();
        $("#wrap").animate({backgroundColor:"#222"},1500);
        $("html").css({"overflow-y":"scroll"});
    });

    
    $(".nav_open").click(function(){
        $("#wrap").animate({backgroundColor:"#dab250"});
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


});