$(document).ready(function(){
    
    $("#btn_link").click(function(){
        $("div.pop").fadeIn("200"); //다음 형제인 .pop를 보이게 함
        $("html").css({overflowY:"hidden"}); // overflow 시 이중 스크롤 생성 방지
        // return false; //a태그 차단
    });

    //Close버튼과 검정배경영역을 클릭할 때
	$(".close, .pop").click(function(){
        $(".pop").hide();//.pop 숨기기
        $("html").css({"overflow-y":"scroll"});
    });

	
});