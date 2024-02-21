$(document).ready(function(){

    //스크롤 이벤트
    $(window).scroll(function(){

        // $("#txt1").text($(this).scrollTop());

        if($(this).scrollTop()>100){
            $("#section2").css({opacity:"1",transition:"all 0.5s ease-out"});
         
        }else{
            $("#section2").css({opacity:"0",transition:"all 0.2s ease-out"});
        }
        if($(this).scrollTop()>700){
            $(".section3_in").css({opacity:"1",transition:"all 0.5s ease-out"});
         
        }else{
            $(".section3_in").css({opacity:"0",transition:"all 0.2s ease-out"});
        }
       
    });

    /*
    $("dd:first").css("width","680px");
    $("dt:first").addClass("selected");
	
    $("dl dt").click(function(){

        $("dd").animate({"width":"0px"},"swing");//현재 열려앴는 dd 안보이게함
        $(this).find("+dd").animate({"width":"680px"},"swing");//선택한 dt의 바로 다음 dd 보이게 함

        $("dt").removeClass("selected"); // 기존 선택된 탭메뉴 제거
        $(this).addClass("selected"); // 새로 선택된 탭메뉴 추가
        
    });
    */

    var oldidx=0; //기존이미지
    var index=0; //선택된 새 이미지
    var menu_n=$("dd").length;

    $("#section2 dd:first").css("width","680px");
    $("#section2 dt:first").addClass("selected");

    function slideImg(index){

        $("#section2 dt").eq(oldidx).removeClass("selected");
        $("#section2 dd").eq(oldidx).animate({"width":"0px"},"swing");
        $("#section2 dt").eq(index).addClass("selected");
        $("#section2 dd").eq(index).animate({"width":"680px"},"swing");
        oldidx=index;
    }

    function slideAuto(){
        index++;
        if(index==menu_n){ //simg_n은 이미지 개수 4, index는 0,1,2,3
            index=0;
        }
        slideImg(index);
    }

    auto=setInterval(slideAuto,4000);

    $(".btn_play").css({"color":"rgb(27, 61, 255)"});

    $(".btn_play").click(function(){
        auto=setInterval(slideAuto,4000);
        $(".btn_stop").css({"color":"#333"});
        $(".btn_play").css({"color":"rgb(27, 61, 255)"});
    });

    $(".btn_stop").click(function(){
        clearInterval(auto);
        $(".btn_play").css({"color":"#333"});
        $(".btn_stop").css({"color":"rgb(27, 61, 255)"});
    });

    $("#section2 dl dt").click(function(){

        $("#section2 dd").animate({"width":"0px"},"swing");//현재 열려앴는 dd 안보이게함
        $(this).find("+dd").animate({"width":"680px"},"swing");//선택한 dt의 바로 다음 dd 보이게 함

        $("#section2 dt").removeClass("selected"); // 기존 선택된 탭메뉴 제거
        $(this).addClass("selected"); // 새로 선택된 탭메뉴 추가

        clearInterval(auto);
        $(".btn_play").css({"color":"#333"});
        $(".btn_stop").css({"color":"rgb(27, 61, 255)"});
        
    });

    $(".tab li").click(function(){

        val=$(this).index();
        num=+70*val; //가로폭 120px씩 증가됨

        $(".tab-header .tab-highlight").animate({top:num});
        $(".tab li a").css("color","#999"); //탭의 모든 글자색
        $(this).find(">a").css("color","#fff"); //선택된 탭의 글자색

        $(".panel>li").hide();//기존의 보여진 내용 숨기기
        $($(this).find(">a").attr("href")).fadeIn();//새로 선택된 내용 href 연결내용 보여주기
        //★ this = 현재 클릭한것 의미 (시점이 다름)

        return false;

    })
	




});