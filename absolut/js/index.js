window.onload = function () {
    var elm = ".box";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
             
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}    

$(document).ready(function(){

    var top1 = $("header").offset();
    var top2 = $("#section1_vodka").offset();
    var top3 = $("#section2_drinks").offset();
    var top4 = $("#section3").offset();

    // $("#scroll_btn ul li:first-child p").removeClass("on");

    $(window).scroll(function(){

        if($(this).scrollTop()>=500){
            $(".section1_bg img:first-child").addClass("turn");
            $(".section1_bg img:last-child").addClass("turn_pointer");
            $(".section1_bg img:last-child").css({"transform":"rotate(0deg)"});
         
        }else{
            $(".section1_bg img:first-child").removeClass("turn");
            $(".section1_bg img:last-child").removeClass("turn_pointer");
            $(".section1_bg img:last-child").css({"transform":"rotate(-90deg)","transition":"1s all"});
        }


        if(window.pageYOffset == top1.top){
            $("#scroll_btn ul li:first-child p").addClass("on");
        }else{
            $("#scroll_btn ul li:first-child p").removeClass("on");
        }

        if(window.pageYOffset == top2.top){
            $("#scroll_btn ul li:nth-child(2) p").addClass("on");
            // $(".section1_bg img:first-child").addClass("turn");
            // $(".section1_bg img:last-child").addClass("turn_pointer");
            // $(".section1_bg img:last-child").css({"transform":"rotate(0deg)"});
        }else{
            $("#scroll_btn ul  li:nth-child(2) p").removeClass("on");
            // $(".section1_bg img:first-child").removeClass("turn");
            // $(".section1_bg img:last-child").removeClass("turn_pointer");
            // $(".section1_bg img:last-child").css({"transform":"rotate(-90deg)","transition":"1s all"});
        }

        if(window.pageYOffset == top3.top){
            $("#scroll_btn ul  li:nth-child(3) p").addClass("on");
        }else{
            $("#scroll_btn ul  li:nth-child(3) p").removeClass("on");
        }

        if(window.pageYOffset == top4.top){
            $("#scroll_btn ul  li:nth-child(4) p").addClass("on");
        }else{
            $("#scroll_btn ul  li:nth-child(4) p").removeClass("on");
        }

    });


    $("#scroll_btn li:first-child").click(function(){
        // var top1 = $("header").offset();
        $("body, html").animate({scrollTop : top1.top},700);
    });
    $("#scroll_btn li:nth-child(2)").click(function(){
        // var top2 = $("#section1_vodka").offset();
        $("body, html").animate({scrollTop : top2.top},700);
    });
    $("#scroll_btn li:nth-child(3)").click(function(){
        // var top3 = $("#section2_drinks").offset();
        $("body, html").animate({scrollTop : top3.top},700);
    });
    $("#scroll_btn li:nth-child(4)").click(function(){
        // var top4 = $("#section3").offset();
        $("body, html").animate({scrollTop : top4.top},700);
    });



    $(".btn_arrow").hover(function(){
        $(".btn_arrow ul li:first-child").stop(true,true).animate({marginLeft:"100px"},250);
    },function(){
        $(".btn_arrow ul li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
    });
    $(".btn_arrow_back").hover(function(){
        $(".btn_arrow_back ul li:first-child").stop(true,true).animate({marginLeft:"-100px"},250);
    },function(){
        $(".btn_arrow_back ul li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
    });

    $(".btn_arrow").click(function(){
        $(this).parent(".visual_submenu").animate({width:"100%"},500,"easeOutElastic");
        $(this).hide();
        $(".illust").show();
        $(".btn_arrow_back").show();
        $(".bg_vodka").show();
        $(".visual_submenu_content").show();
        $("h1.logo img").attr({"src":"image/logo_white.png"});
        $(".top_menu li").css({"color":"#fff","transition":"0.2s"});
        $("li.bottle").removeClass("bottle_turn");
        $("div.cover").removeClass("cover_turn");
    });
    $(".btn_arrow_back").click(function(){
        $(this).parent(".visual_submenu").animate({width:"15%"},500,"easeOutElastic");
        $(this).hide();
        $(".illust").hide();
        $(".btn_arrow").show();
        $(".bg_vodka").hide();
        $(".visual_submenu_content").hide();
        $("h1.logo img").attr({"src":"image/logo.png"});
        $(".top_menu li:first-child").css({"color":"#333","transition":"unset"});
        $("li.bottle").addClass("bottle_turn");
        $("div.cover").addClass("cover_turn");
    });

    $(".visual_submenu_content").hover(function(){
        $(".illust").animate({"right":"-40%"},"fast");
    },function(){
        $(".illust").animate({"right":"0px"},"fast");
    });

    $(".btn_play").click(function(){
        $(this).next().show(); //다음 형제인 .pop를 보이게 함
        $("html").css({overflowY:"hidden"}); // overflow 시 이중 스크롤 생성 방지
        $("#scroll_btn").hide();
        return false; //a태그 차단
    });

    //Close버튼과 검정배경영역을 클릭할 때
	$(".btn_play_close, .pop").click(function(){
        $(".pop").hide();//.pop 숨기기
        $("html").css({"overflow-y":"scroll"});
        $("#scroll_btn").show();
    });



    $(function () {

        var mySwiper1 = new Swiper ('.gallery1', {
          loop: true, //순환유무	 
          pagination: '.nav1', //네비게이션class명
          grabCursor: true, //커서 손모양
          autoplay: 5000, //자동진행
          effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
     
          //이전 다음 버튼
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
        });
     
     });

    var oldidx=0;  //기존이미지
	var idx=0;   //새로 바뀌는 이미지
    var img_n= $("ul.section3_story li").length;  //1,2,3...개수를 세어서 변수에 저장한다.

    //이미지와 버튼이 바뀌는 함수
    function changeImg(idx){  //매개변수가 있는 함수-->idx는 선택되는 이미지

        if(oldidx!=idx){ //기존의 이미지와 선택된 이미지가 다를때...

            $("ul.section3_story li").eq(idx).stop(true,true).fadeIn(400); //선택된 이미지 나타남
			$("ul.section3_story li").eq(oldidx).stop(true,true).fadeOut(400);  //기존 이미지	사라짐

        }
        oldidx=idx; //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    //자동함수 생성
    function changeAuto(){

        idx++;
        //선택한 이미지가 마지막일때 다시 처음 이미지부터 시작
        if(idx>img_n-1){ //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
            idx=0;
        }
        changeImg(idx);

    }

    timer=setInterval(changeAuto,4000);  //4초 간격으로 함수를 자동재생


});