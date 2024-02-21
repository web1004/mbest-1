$(document).ready(function(){

    //gnb
    $("#gnb>span").mouseenter(function(){
        $(".gnb_in>li").animate({"opacity":"1"}).show();
    });
    $("#gnb").mouseleave(function(){
        $(".gnb_in>li").stop().animate({"opacity":"0"}).hide();
    });

    //nav
    $(".top_nav>li").hover(function(){ //각각의 주메뉴 오버 시
        $(this).find("ul").css({"background":"#f4f3f3"});
    },function(){
        $(this).find("ul").css({"background":"#fff"});
    })

    //주메뉴 오버 시 서브메뉴 풀다운 업다운
    $(".top_nav").mouseenter(function(){
        $(this).find("ul>li>.sub_nav").stop().slideDown();
        $(".bg_box").stop().slideDown();
    });

    $("nav").mouseleave(function(){
        $(this).find("ul>li>.sub_nav").stop().slideUp();
        $(".bg_box").stop().slideUp();
    });


    //비주얼 슬라이드
    var img_w=$(".v_slide li").width(); //이미지의 가로 너비
    var simg_n=$(".v_slide li").length; //이미지의 총 개수
    var soldidx=0; //기존이미지
    var sindex=0; //선택된 새 이미지

    //index번째 비주얼 이미지 이동하는 함수 생성
    function slideImg(sindex){

        targetX=-(sindex*img_w); // 움직이는 거리(너비)

        $(".v_slide").animate({left:targetX},640)
        $(".v_slide_btn li").eq(soldidx).removeClass("active"); //기존 버튼 활성화
        $(".v_slide_btn li").eq(sindex).addClass("active"); //선택 버튼 활성화
        soldidx=sindex;
    }

    function slideAuto(){
        sindex++;
        if(sindex==simg_n){ //simg_n은 이미지 개수 4, index는 0,1,2,3
            sindex=0;
        }
        slideImg(sindex);
    }

    auto=setInterval(slideAuto,5000);
    

    //하단버튼 클릭
    $(".v_slide_btn li").click(function(){

        clearInterval(auto); //버튼 클릭 시 자동함수 해지
        $(".play").hide();
        $(".stop").show();

        sindex=$(this).index();
        slideImg(sindex);
        auto=setInterval(slideAuto,4000); //버튼 클릭안할 땐 다시 자동함수 실행

    })

    //Play, Stop 클릭
    $(".play").hide(); // 처음에는 Stop버튼은 보이게 하기 위해 Play버튼은 숨김

    $(".stop").click(function(){
        clearInterval(auto);
        $(".stop").hide();
        $(".play").show();
    });

    $(".play").click(function(){
        auto=setInterval(slideAuto,4000);
        $(".play").hide();
        $(".stop").show();
    });




    //section2 탭메뉴
    $(".board_in>li:not(:first)").hide();
    $(".tab_menu>li>a").click(function(){
        $(".tab_menu>li>a").removeClass("selected");
        $(this).addClass("selected");

        $(".board_in>li").hide();
        $($(this).attr("href")).show();

        return false;
    });


    //자동으로 슬라이드 함수 생성
    function slideAuto2(){

        $(".image_slide ul").stop(true,true).animate({marginLeft:"-=190px"},1000,function(){            
            $(".image_slide li:first-child").appendTo(".image_slide ul"); //첫번째 이미지 맨뒤로 이동
            $(this).css({marginLeft:"0px"}); //최종목적지
        });

    }
    auto2=setInterval(slideAuto2,4000);


    //마우스 호버 시 슬라이드자동함수 멈추기 + 마우스 아웃 시 자동함수 실행
    $(".image_slide").hover(function(){
        $(".image_slide>ul>li>p").css({"border":"3px solid red"});
        clearInterval(auto2);
    }, function(){
        auto2=setInterval(slideAuto2,4000);
    });

    //다음보기
    $(".next").click(function(){

        $(".image_slide ul").stop(true,true).animate({marginLeft:"-=190px"},1000,function(){            
            $(".image_slide ul li:first-child").appendTo(".image_slide ul"); //첫번째 이미지 맨뒤로 이동
            $(this).css({marginLeft:"0px"}); //최종목적지
        }); 

    });

    //이전보기
    $(".prev").click(function(){

        $(".image_slide ul").stop(true,true).animate({marginLeft:"+=190px"},1000,function(){            
            $(".image_slide ul li:last-child").prependTo(".image_slide ul"); //첫번째 이미지 맨뒤로 이동
            $(this).css({marginLeft:"0px"}); //최종목적지
        }); 

    });



    var oldidx=0;
    var idx=0;
    var img_n=$(".bg li").length;

    function changeImg(idx){

        if(oldidx!=idx){
            $(".bg li").eq(idx).stop(true,true).fadeIn(1000);
            $(".bg li").eq(oldidx).stop(true,true).fadeOut(1000);
        }
        oldidx=idx;
    }

    function changeAuto(){
        idx++;
        if(idx>img_n-1){
            idx=0;
        }
        changeImg(idx);
    }
    timer=setInterval(changeAuto,3000);

    $(".textbox li").hover(function(){
        $(this).find(".menu_block").stop(true,true).animate({marginTop:"-400px"},500);
    },function(){
        $(this).find(".menu_block").stop(true,true).animate({marginTop:"0"},500);
    });
	

    $(".list01").hover(function(){
        $(".list01>li:first-child").stop(true,true).animate({marginLeft:"-630px"},250);
    },function(){
        $(".list01>li:first-child").stop(true,true).animate({marginLeft:"0"},250);
    });
    $(".list02").hover(function(){
        $(".list02>li:first-child").stop(true,true).animate({marginLeft:"-630px"},250);
    },function(){
        $(".list02>li:first-child").stop(true,true).animate({marginLeft:"0"},250);
    });
});