$(document).ready(function(){

    $(".nav_open").click(function(){
        // $(this).hide();
        $("nav").animate({"left":"0%"},300,"easeInExpo");
        $("nav>ul>li:nth-child(1)").delay(300).animate({"margin-left":"0"},"swing");
        $("nav>ul>li:nth-child(2)").delay(400).animate({"margin-left":"0"},"swing");
        $("nav>ul>li:nth-child(3)").delay(500).animate({"margin-left":"0"},"swing");
        $("nav>ul>li:nth-child(4)").delay(600).animate({"margin-left":"0"},"swing");
        $("nav>ul>li:nth-child(5)").delay(700).animate({"margin-left":"0"},"swing");
        // $(".swiper-slide").hide();
    });
    $(".nav_close").click(function(){
        $("nav").stop(true,true).animate({"left":"-100%"},300,"swing");
        $("nav>ul>li").stop(true,true).animate({"margin-left":"-100%"});
    });

});