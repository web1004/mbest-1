$(document).ready(function(){

    //스크롤 이벤트
    $(window).scroll(function(){

        //헤더 배경
        if($(this).scrollTop()>1000){
            $("#header_in").css({background:"#fff","box-shadow":"0px 2px 30px rgba(0,0,0,0.3)"});
            $("nav h1#logo").css({"color":"#ff7e42"});
            $(".gnb_btn span").addClass("orange");
        }else{
            $("#header_in").css({background:"none","box-shadow":"none"});
            $("nav h1#logo").css({"color":"#fff"});
            $(".gnb_btn span").removeClass("orange");
        }

        //메인비주얼 텍스트
        if($(this).scrollTop()>1100){
            $(".text").css({opacity:"0",transition:"all 0.2s ease-out"});
        }else{
            $(".text").css({opacity:"1",transition:"all 0.5s ease-out"});
        }

        //섹션 애니메이션
        if($(this).scrollTop()>1400){
            $(".section_in_title").css({top:"0px","opacity":"1",transition:"all 0.5s ease-out"});
            $(".section_in_title span:nth-child(2)").addClass("circle");
        }else{
            $(".section_in_title").css({top:"100px","opacity":"0",transition:"all 0.5s ease-out"});
            $(".section_in_title span:nth-child(2)").removeClass("circle");
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


    //비주얼 애니메이션
    $(".talkbubble li:nth-child(1)").stop(true,true).animate({"bottom":"550px","opacity":"1"},1400,"easeInOutBack");
    $(".talkbubble li:nth-child(2)").stop(true,true).animate({"bottom":"450px","opacity":"1"},1000,"easeInOutBack");
    $(".talkbubble li:nth-child(3)").stop(true,true).animate({"bottom":"380px","opacity":"1"},600,"easeInOutBack");
    $(".talkbubble li:nth-child(4)").stop(true,true).animate({"bottom":"280px","opacity":"1"},400,"easeInOutBack");

    //section_in 이미지 슬라이드
    function slideAuto(){

        $(".img_slide ul:first-child").stop(true,true).animate({marginLeft:"-=190px"},4000,function(){            
            $(".img_slide ul:first-child li:first-child").appendTo(".img_slide ul:first-child"); //첫번째 이미지 맨뒤로 이동
            $(this).css({marginLeft:"0px"}); //최종목적지
        });

        $(".img_slide ul:last-child").stop(true,true).animate({marginLeft:"+=190px"},4000,function(){            
            $(".img_slide ul:last-child li:last-child").prependTo(".img_slide ul:last-child"); 
            $(this).css({marginLeft:"0px"}); //최종목적지
        });

    }
    auto=setInterval(slideAuto,4000);

});