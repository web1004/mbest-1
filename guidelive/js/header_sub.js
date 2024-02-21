$(document).ready(function(){

    //스크롤 이벤트
    $(window).scroll(function(){


        //헤더 배경
        if($(this).scrollTop()>500){
            $("#header_in").css({background:"#fff","box-shadow":"0px 2px 30px rgba(0,0,0,0.3)"});
        }else{
            $("#header_in").css({background:"none","box-shadow":"none"});
            // $("#header_in").hover(function(){
            //     $("#header_in").css({"background":"rgba(255,255,255,0.3)","transition":"all 1s"})
            // },function(){
            //     $("#header_in").css({"background":"none","transition":"all 1s"})
            // });
        }

    });

    //헤더 네비게이션 
    $(".gnb_btn").click(function(){
        $(this).toggleClass("gnb_open");
        $(this).find("span").toggleClass("gnb_open");
        $(".gnb").animate({"width":"toggle"},200);
    });
    $(".gnb>a").click(function(){
        alert("본 포트폴리오와 무관한 가이드라이브의 공식 소셜 사이트입니다.");
    });



});