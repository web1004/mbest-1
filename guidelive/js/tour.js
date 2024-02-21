$(document).ready(function(){

    //스크롤 이벤트
    $(window).scroll(function(){

        // $("#txt1").text($(this).scrollTop());
        if($(this).scrollTop()>150){
            $("#section2").css({opacity:"1",transition:"all 0.5s ease-out"});
         
        }else{
            $("#section2").css({opacity:"0",transition:"all 0.2s ease-out"});
        }
        

    });

    // $(".tour_content").hover(function(){
    //     $(this).find("li:first-child").stop(true,true).animate({marginLeft:"-350px"},"200");
    // },function(){
    //     $(this).find("li:first-child").stop(true,true).animate({marginLeft:"0"},"200");
    // });

    $(".tour_content").hover(function(){
        $(this).stop(true,true).animate({marginLeft:"-350px"},300);
        $(this).find("li:last-child p").animate({"height":"220px"},300,"easeInOutBack");
    },function(){
        $(this).stop(true,true).animate({marginLeft:"0"},300);
        $(this).find("li:last-child p").animate({"height":"0px"});
    });


    /*리스트 이미지 클릭 시*/
    $(".more_btn").click(function(){

        g_pop=$(this).parents(".tour_list>li").index();
        $(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버
        $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
        $(".pop>li").eq(g_pop).show(); //g_pop index에 해당하는 팝업보이기
        $(".popup").stop(true,true).fadeIn(); //검정배경

    });


    /*오른쪽 상단 버튼 - 다음보기*/
    $(".right_btn").click(function(){

        $(".popup").scrollTop(0); /* 스크롤 상단으로 올리기 */

        if(g_pop<11){
            $(".pop>li").eq(g_pop).stop(true,true).fadeOut();//기존 숨기기
            g_pop++;

            $(".g_page span:nth-child(1)").text(g_pop+1);
            $(".pop>li").eq(g_pop).stop(true,true).fadeIn();

        }

    });


    /*왼쪽 상단 버튼 - 이전보기*/
    $(".left_btn").click(function(){

        $(".popup").scrollTop(0); /* 스크롤 상단으로 올리기 */

        if(g_pop>0){
            $(".pop>li").eq(g_pop).stop(true,true).fadeOut();//기존 숨기기
            g_pop--;

            $(".g_page span:nth-child(1)").text(g_pop+1);
            $(".pop>li").eq(g_pop).stop(true,true).fadeIn();
            
        }

    });


    /*오른쪽 상단 버튼 - 닫기*/
    $(".btn_close").click(function(){
        $("html").css({overflowY:"scroll"});
        $(".popup").stop(true,true).fadeOut();
        $(".pop>li").stop(true,true).hide();
    });

    $(".top_btn").click(function(){
        $("html,body").animate({scrollTop:"501"});
    });




});