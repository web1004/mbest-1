$(document).ready(function(){

    /*________________헤더________________*/


    /*________________aside________________*/
    //***event***

    //접기 및 펼치기
    $(".event_btn").hide();
    $(".event_btn").click(function(){
        $(this).hide();
        $(".event").show().animate({"width":"550px"})
        $(".event_btn_close").show();
    });
    $(".event_btn_close").click(function(){
        $(this).hide();
        $(".event").animate({"width":"0"})
        $(".event_btn").show();
    });

    //600이상 섹션부터 버튼 노출
    $(window).scroll(function(){
        if($(this).scrollTop()>600){
            $(".event_btn").fadeIn();
        }else{
            $(".event_btn").fadeOut();
        }
    });
    
    //내부 컨텐츠 슬라이드
    var event_w=$(".event_contents>li").width(); 
    var event_oldidx=0; 
    var event_index=0; 

    function slideEvent(event_index){

        eventX=-(event_index*event_w);

        $(".event_contents").animate({left:eventX},200)
        $(".event_slide_bar>li").eq(event_oldidx).removeClass("event_on"); 
        $(".event_slide_bar>li").eq(event_index).addClass("event_on"); 
        event_oldidx=event_index;
    }

    //하단버튼 클릭
    $(".event_slide_bar>li").click(function(){

        event_index=$(this).index();
        slideEvent(event_index);

    })



    //***TOP버튼***
    $(".top_btn").hide();

    $(window).scroll(function(){
        if($(this).scrollTop()>600){
            $(".top_btn").fadeIn();
        }else{
            $(".top_btn").fadeOut();
        }
    
    });

    $(".top_btn").click(function(){
        $("html,body").animate({scrollTop:"0"});
        return false;
    });

    //작은 상단좌측 로고
    $(".scroll_logo").hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>600){
            $(".scroll_logo").fadeIn();
        }else{
            $(".scroll_logo").fadeOut();
        }
    
    });


    /*_________________비주얼_________________*/

    //비주얼 전체 배경 롤링
    var oldvidx=0;  
	var vidx=0;   
    var count= $("#visual>li").length; 

    function changeVisual(vidx){ 

        if(oldvidx!=vidx){ 
            $("#visual>li").eq(vidx).stop(true,true).fadeIn("slow"); 
			$("#visual>li").eq(oldvidx).stop(true,true).hide();  
            $("#visual_bg li").eq(oldvidx).stop().removeClass("visible");
            $("#visual_bg li").eq(vidx).stop().addClass("visible");
        }
        oldvidx=vidx; 

    }
    function changeAuto(){

        vidx++;
 
        if(vidx>count-1){ 
            vidx=0;
        }
        changeVisual(vidx);

    }
    timer=setInterval(changeAuto,6000); 

    //비주얼 좌우버튼 클릭
    $(".v_btn_prev").click(function(){

        clearInterval(timer);  
        vidx--;
		if(vidx<0){ 
		  vidx=count-1;  
		}
		changeVisual(vidx)
        timer=setInterval(changeAuto,6000);  

    });

    $(".v_btn_next").click(function(){

        clearInterval(timer);  
        vidx++;
		if(vidx>count-1){
		  vidx=0;
		}
		changeVisual(vidx);	
        timer=setInterval(changeAuto,4000);  

    });

    // 비주얼 랭킹순위 롤링
    var oldidx=0;
    var idx=0;

    function changeRanking(){
        idx++;
        if(idx>9){
            idx=0;
        }

        $(".ranking_top10 li").eq(idx).stop(true,true).fadeIn(); 
        $(".ranking_top10 li").eq(oldidx).stop(true,true).hide(); 
        oldidx=idx;
    }
    setInterval(changeRanking,4000);

    //랭킹순위 전체보기
    $(".ranking_top10_all").hide();


    $(".btn_open").click(function(){
            $(".ranking_top10_all").fadeIn("fast");
            $(".ranking").hide();
            $("#visual .synop li:first-child").hide();
    });
    $(".btn_close").click(function(){
        $(".ranking_top10_all").hide();
        $(".ranking").show();
        $("#visual .synop li:first-child").fadeIn();
    });

    $(".gnb").click(function(){
        $(this).toggleClass("menu_open");
        $(".gnb_menu").slideToggle("fast");
        $("html, body").toggleClass("no_scroll"); 
    });

    /*_________________섹션1 해시태그 선택 기능_________________*/
    
    $(".tag dd").click(function(){
        $(".tag_all").removeClass("tag_on");
        $(this).toggleClass("tag_on");
    });

    /*_________________섹션1 검색 기능_________________*/
    $(".search input,.search_close_btn").hide();
    $(".search_btn").click(function(){
        $(".search input").css({"width":"100px"}).show();
        $(".search_bg").css({"width":"160px","border-radius":"20px"}).show();
        $(".search_close_btn").stop().show();
    });
    $(".search_close_btn").click(function(){
        $(".search input").hide();
        $(".search_bg").css({"width":"30px","border-radius":"50%"});
        $(".search_btn:hover").css({"background":"none"})
        $(".search_close_btn").stop().hide();

    });



     /*_________________섹션1 영화 시놉시스 더보기 버튼 클릭_________________*/
     t=true;
     var synop_h=$(".now_info>li>p").height()+900;
    $(".now_info>li>span").click(function(){
        $(".now_info>li>p").toggleClass("now_info_more"); //height 높이 200 설정 클래스
        
        // t=$(this).html("더보기");
        if(t){
            $(".now_info>li>span").text("접어두기");
            $("#section1 .now_bg li,#section1").animate({"height":synop_h});
            t=false;
        }else{
            $(".now_info>li>span").text("더보기");
            $("#section1 .now_bg li,#section1").animate({"height":"900px"});
            t=true;
        }
     });


	/*_________________섹션1 now showing_________________*/
    
    var now_w=$(".list>li").width()+20; 
    var now_n=$(".list>li").length;
    var now_oldidx=0;
    var now_index=0;

    //***포스터 슬라이드***
    $(".list>li:last").prependTo(".list");
    $(".list").css({left:-now_w+50});

    function slideNow(now_index,m){ 
        
        if(m==0){
            $(".list").stop(true,true).animate({
                left:"+="+now_w+"px"},300,function(){
                $(".list>li:last").prependTo(".list");
                $(".list").css({left:-now_w+50});
            });
        }else{
            $(".list").stop(true,true).animate({
                left:"-="+now_w+"px"},300,function(){
                $(".list>li:first").appendTo(".list");
                $(".list").css({left:-now_w+50});
            });
        }

        $(".now_info>li").eq(now_index).stop(true,true).fadeIn(300); 
		$(".now_info>li").eq(now_oldidx).stop(true,true).fadeOut(300);
        
        $(".now_bg li").eq(now_index).stop(true,true).fadeIn(300);
        $(".now_bg li").eq(now_oldidx).stop(true,true).fadeOut(300);

        $(".slide_bar li").eq(now_oldidx).removeClass("bar_on"); 
        $(".slide_bar li").eq(now_index).addClass("bar_on"); 


        now_oldidx=now_index;
    }

    function slideNowAuto(){
        now_index++;
        if(now_index==now_n){ 
            now_index=0;
        }
        slideNow(now_index,1); 
    }

    autoNow=setInterval(slideNowAuto,4000);


    $(".list>li").hover(function(){
        clearInterval(autoNow);
    }, function(){
        autoNow=setInterval(slideNowAuto,4000);
    });

    //이전버튼 클릭
    $(".list_prev").click(function(){

        clearInterval(autoNow);

        now_index--;
        if(now_index<0){
            now_index=now_n-1;
        }
        slideNow(now_index,0);
        autoNow=setInterval(slideNowAuto,4000);

    })

    //다음버튼 클릭
    $(".list_next").click(function(){

        clearInterval(autoNow);
        
        now_index++;
        if(now_index>=now_n){ 
            now_index=0;
        }
        slideNow(now_index,1);
        autoNow=setInterval(slideNowAuto,4000);

    })

    /*_________________섹션2 상영시간표_________________*/

    //상영시간표 날짜 선택
    $(".date_tab>ul>li").click(function(){

        val=$(this).index();
        num=+60*val;
        if(val<3){
            $(".tab_mark").animate({left:num});

            $(".table_all>li").hide();
            $($(this).find(">a").attr("href")).show();

            return false;
        }else{
            alert("상영시간표 준비 중입니다. 날짜를 변경해주세요.");
        }

    })

    //정렬기준 선택
    $(".section2_in>dl>dd").click(function(){
        $(".section2_in>dl>dd").removeClass("time_on");
        $(this).addClass("time_on");
    });



    //시간선택 시 관람등급 블럭색상 변경
    $(".table_time").hover(function(){
        $(this).parent().find(">ul:first-child>li>div").stop(true,true).animate({"width":"105px"});
        $(this).parent().find(">ul:first-child>li:last-child").css({"color":"#fff","font-weight":"400"});
    },function(){
        $(this).parent().find(">ul:first-child>li>div").stop(true,true).animate({"width":"0px"});
        $(this).parent().find(">ul:first-child>li:last-child").css({"color":"#333","font-weight":"100"});

    });


});