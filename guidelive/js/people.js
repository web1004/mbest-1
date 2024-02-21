$(document).ready(function(){

    //스크롤 이벤트
    $(window).scroll(function(){

        //$("#txt1").text($(this).scrollTop());
        if($(this).scrollTop()>100){
            $(".section1_slide,#section2").css({opacity:"1",transition:"all 0.5s ease-out"});
         
        }else{
            $(".section1_slide,#section2").css({opacity:"0",transition:"all 0.2s ease-out"});
        }

    });


    var img_w=$(".section1_contents li").width(); //이미지의 가로 너비
    var img_n=$(".section1_contents li").length; //이미지의 총 개수
    var oldidx=0; //기존이미지
    var index=0; //선택된 새 이미지
    var targetX=-(index*img_w)

    // $(".section1_contents li:last").prependTo(".section1_contents");
    //갤러리의 마지막 이미지를 갤러리 안의 가장 앞으로 배치
    // $(".section1_contents").css({left:-img_w});
    //갤러리를 하나의 이미지 가로길이 만큼 왼쪽으로 배치
    $(".section1_contents li div").eq(1).find("span").fadeIn();

    //index번째 비주얼 이미지 이동하는 함수 생성
    function slideImg(index,m){ //m은 prev와 next를 판단

        if(m==0){ //prev 클릭
        //이전 이미지가 슬라이드된 후 마지막 이미지를 갤러리 안의 제일 앞으로 배치
            $(".section1_contents").stop(true,true).animate({
                left:"+="+targetX+"px"},100,"easeOutCubic",function(){
                $(".section1_contents li div").eq(1).find("span").hide();
                $(".section1_contents li div").eq(0).find("span").fadeIn();
                $(".section1_contents li div").eq(1).removeClass("active_left").removeClass("active").addClass("active_right");
                $(".section1_contents li div").eq(0).removeClass("active_right").removeClass("active_left").addClass("active");
                $(".section1_contents li div").eq(7).removeClass("active_right").removeClass("active").addClass("active_left");
                $(".section1_contents li:last").prependTo(".section1_contents");
                $(".section1_contents").css({left:-targetX});//최종목적지
            });
        }else{ //next 클릭
        //다음 이미지가 슬라이드된 후 맨 앞의 이미지를 갤러리 안의 맨 마지막 배치
        $(".section1_contents").stop(true,true).animate({
            left:"-="+targetX+"px"},100,"easeOutCubic",function(){
            $(this).find("li div").eq(1).removeClass("active");
            $(this).find("li div").eq(2).removeClass("active_right");
            $(this).find("li div").eq(3).removeClass("active_left"); 
            $(this).find("li div").eq(1).addClass("active_left"); 
            $(this).find("li div").eq(2).addClass("active");
            $(this).find("li div").eq(3).addClass("active_right");
            $(".section1_contents li div").eq(1).find("span").hide();
            $(".section1_contents li div").eq(2).find("span").fadeIn();
            $(".section1_contents li:first").appendTo(".section1_contents");
            $(".section1_contents").css({left:-targetX});//최종목적지
        });
        }
        oldidx=index;
    }

    function slideAuto(){
        index++;
        if(index==img_n){ //simg_n은 이미지 개수 4, index는 0,1,2,3
            index=0;
        }
        slideImg(index,1); //1은 슬라이드방향을 next로 하기위함 (0이면 prev)
    }

    auto=setInterval(slideAuto,4000);



    //이전버튼 클릭
    $(".btn_prev").click(function(){

        clearInterval(auto);

        index--;
        if(index<0){ //첫번째 이미지까지 오면 다시 맨 마지막 이미지부터 시작
            index=img_n-1; //총개수 4(이미지 4컷)에서 1을 뺀 3->index=3(0,1,2,3)
        }
        slideImg(index,0);
        auto=setInterval(slideAuto,4000);

    })


    //다음버튼 클릭
    $(".btn_next").click(function(){

        clearInterval(auto);
        
        index++;
        if(index>=img_n){ //마지막 이미지까지 오면 다시 첫번째 이미지부터 다시
            index=0;
        }
        slideImg(index,1);
        auto=setInterval(slideAuto,4000);

    })


    $(".btn_play").hide(); // 처음에는 Stop버튼은 보이게 하기 위해 Play버튼은 숨김

    $(".btn_stop").click(function(){
        clearInterval(auto);
        $(".btn_stop").hide();
        $(".btn_play").show();
        $(".slide_btn>div").css({"background":"#666"});
    });

    $(".btn_play").click(function(){
        auto=setInterval(slideAuto,4000);
        $(".btn_play").hide();
        $(".btn_stop").show();
        $(".slide_btn>div").css({"background":"rgb(27, 61, 255)"});
    });


  
    

});