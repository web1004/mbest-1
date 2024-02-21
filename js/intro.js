$(document).ready(function(){
    // alert("Chrome 브라우저 및 PC에 최적화되어 있습니다.\n본 포트폴리오는 취업 지원을 위한 비상업적 용도로 사용중입니다.");
    $("div.intro_bg1").delay(300).animate({"height":"100%"},1000,"easeInOutBack");
    $("div.intro_bg2").delay(2500).animate({"height":"100%"},1000,"easeInOutQuart");
    $(".text1").fadeIn()
    $(".text1").delay(1800).animate({"top":"300px","opacity":"0"},1000,"easeInExpo");
    $(".text2, .text3").show(2000);
    $(".intro_text ul").delay(800).animate({"width":"670px","opacity":"1"},1500,"easeOutBounce");
    $(".intro_text ul li:not(.y, .j)").delay(2300).animate({"opacity":"0"},600);
    $(".y").delay(2300).animate({"left":"297px"},"easeOutExpo").animate({"color":"#f2f2f2"},500);
    $(".j").delay(2300).animate({"bottom":"-35px"},"easeInQuint").animate({"color":"#f2f2f2"},500);
    $(".circle").css({"transform":"scale(1)","transition":"1s all 2.5s"});
    $(".circle2").addClass("circle_scale");
});