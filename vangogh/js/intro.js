$(document).ready(function(){

    $(".nav_open").click(function(){
        $("#wrap").animate({backgroundColor:"rgb(53, 39, 5)"});
    });
    $(".nav_close").click(function(){
        $("#wrap").animate({backgroundColor:"#222"},1500);
    });
    

    $(".tab_content>li:not(:first)").hide(); 
	
    $(".tab>li>a").click(function(){
        $(".tab>li>a").removeClass("active");
        $(this).addClass("active");

        $(".tab_content>li").hide();
        $($(this).attr("href")).show();

        return false;
    });
    $(".tab>li:first-child>a").click(function(){
        $("#visual").css({
            background:"url(image/intro/visual.jpg) no-repeat center center",
            "background-size":"cover"
        }).hide().fadeIn();
        $("#visual div img").attr({"src":"image/index/person.png"}).animate({left:"-40%"},1000);
    });
    $(".tab>li:last-child>a").click(function(){
        $("#visual").css({background:"none"}).hide().fadeIn();
        $("#visual div img").attr({"src":"image/intro/person.png"}).animate({left:"35%"},1000);
    });
    

    $(window).scroll(function(){
        if($(this).scrollTop()>$(window).height()*(0.5/10)){
            $("header").css({"background":"#222","transition":"0.5s all"});
        }else{
            $("header").css({"background":"none","transition":"0.5s all"});
        }
    });

});