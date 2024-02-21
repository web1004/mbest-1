$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()>$(window).height()*(0.5/10)){
            $("header").css({"background":"#222","transition":"0.5s all"});
        }else{
            $("header").css({"background":"none","transition":"0.5s all"});
        }
    });
    $("section #section_in ul.contents>li").css({"top":"10%",opacity:"0"});
    $("section #section_in ul.contents>li:nth-child(1)").animate({"top":"0%",opacity:"1"},500);
    $("section #section_in ul.contents>li:nth-child(2)").delay(500).animate({"top":"0%",opacity:"1"},500);
    $("section #section_in ul.contents>li:nth-child(3)").delay(1000).animate({"top":"0%",opacity:"1"},500);

    $(".menu").click(function(){
        $(this).next().show(); //다음 형제인 .pop를 보이게 함
        $("html").css({overflowY:"hidden"}); // overflow 시 이중 스크롤 생성 방지
        return false; //a태그 차단
    });

    //Close버튼과 검정배경영역을 클릭할 때
	$(".close").click(function(){
        $(".pop").hide();//.pop 숨기기
        $("html").css({"overflow-y":"scroll"});
    });


});