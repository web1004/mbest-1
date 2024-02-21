$(document).ready(function(){

    //인트로
    // $("#intro").delay(5000).fadeOut();

    //뒤로가기 버튼 방지 코드
    history.pushState(null, null, location.href);
	window.onpopstate = function(event) {
    	history.go(1);
	};

    //************메인************

    $("header #top_menu").click(function(){
        $(this).animate({"width":"250px"},200);
        $("header #top_menu>li>a>ul>li:last-child").show().animate({width:"130px"},200);
    });
    $("header #top_menu").mouseleave(function(){
        $(this).animate({"width":"70px"});
        $("header #top_menu>li>a>ul>li:last-child").hide().animate({width:"0px"});
    });

    $(".shortcut1 li").hover(function(){
        $(this).find(".menu_slide").stop(true,true).animate({marginLeft:"-120px"},1000,"easeInOutCubic");
    },function(){
        $(this).find(".menu_slide").stop(true,true).animate({marginLeft:"0px"},"easeOutExpo");
    });

    //이미지 전환효과 함수생성

    var showMainImg=0;
    var nextMainImg=0;
    var mainImgCount=$("#main #visual ul.main_visual li").length;

    $("#main #visual ul.main_visual li:first-child").find(".play_bar>div").addClass("play_ani");

    function changeVisual(nextMainImg){

        $("#main #visual ul.main_visual li").eq(showMainImg).removeClass("visual_active");
        $("#main #visual ul.main_visual li").eq(nextMainImg).addClass("visual_active");
        $("#main #visual ul.main_visual li").eq(showMainImg).find(".play_bar>div").removeClass("play_ani");
        $("#main #visual ul.main_visual li").eq(nextMainImg).find(".play_bar>div").addClass("play_ani");
        $(".page span:nth-child(1)").text(nextMainImg+1);
        showMainImg=nextMainImg;
    }
    function change_auto(){
        nextMainImg++;

        if(nextMainImg==mainImgCount){ 
            nextMainImg=0;
        }
        changeVisual(nextMainImg);
    }
    timer_visual=setInterval(change_auto,5000);

    $(".play").hide();

    $(".stop").click(function(){
        clearInterval(timer_visual);
        $("#main #visual ul.main_visual li").eq(nextMainImg).find(".play_bar>div").removeClass("play_ani");
        $(".stop").hide();
        $(".play").show();
    });

    $(".play").click(function(){
        timer_visual=setInterval(change_auto,5000);
        $("#main #visual ul.main_visual li").eq(nextMainImg).find(".play_bar>div").addClass("play_ani");
        $(".play").hide();
        $(".stop").show();
    });

    var visual_n=$("#main #visual ul.main_visual li").length; //이미지의 총 개수
    
    //이전버튼 클릭
    $(".visual_prev").click(function(){

        clearInterval(timer_visual);
        $(".stop").show();
        $(".play").hide();

        nextMainImg--;
        if(nextMainImg<0){ 
            nextMainImg=3; 
        }
        changeVisual(nextMainImg);
        timer_visual=setInterval(change_auto,5000);
    })

    // 다음버튼 클릭
    $(".visual_next").click(function(){

        clearInterval(timer_visual);
        $(".stop").show();
        $(".play").hide();

        nextMainImg++;
        if(nextMainImg>=mainImgCount){ 
            nextMainImg=0; 
        }
        changeVisual(nextMainImg);
        timer_visual=setInterval(change_auto,5000);
    })



    //************웹디자인************

    //*----탭메뉴----*
    $(".design_title .tab li").click(function(){

        val=$(this).index();

        $(".tab li a").removeClass("selected"); 
        $(this).find(">a").addClass("selected"); 

        $(".panel>li").hide();
        $($(this).find(">a").attr("href")).fadeIn(200);

        return false;

    })

    //*----Detail View(iframe)----*
    $(".btn_view").click(function(){
		$(this).next().show(); 
		$(this).next().find("iframe").animate({"top":"200vh"},1000);
		$("html").css({overflowY:"hidden"});
		$("header #top_menu").animate({"left":"-250px"});
		$(".close").show();
		return false;
	});

	$(".close").click(function(){
		$(".pop").delay(600).fadeOut();
		$("header #top_menu").animate({"left":"0px"});
		$(".btn_view").next().find("iframe").animate({"top":"300vh"},1000);
		$("html").css({"overflow-y":"scroll"});
        $(this).hide();
	});


    
	//*----2D Graphic----*

	var oldidx=0;
	var idx=0;
    var img_n= $("#tab1 div.g_slide_thumb>ul>li").length;

    function changeImg(idx){

        if(oldidx!=idx){

            $("#tab1 div.g_slide_thumb>ul>li").eq(idx).addClass("active"); 
            $("#tab1 div.g_slide_thumb>ul>li").eq(oldidx).removeClass("active");

            $("ul#graphic_bg li").eq(idx).stop(true,true).fadeIn(300);
			$("ul#graphic_bg li").eq(oldidx).stop(true,true).fadeOut(300);  
			$("#tab1 div.g_slide_detail>ul>li").eq(idx).stop(true,true).show(); 
			$("#tab1 div.g_slide_detail>ul>li").eq(oldidx).stop(true,true).hide(); 

        }
        oldidx=idx;

    }

	$("#tab1 div.g_slide_thumb>ul>li").click(function(){

        idx=$(this).index();
		changeImg(idx);

    });

	var num=0;

	
	$("#tab1 .g_slide_thumb>div>div.thumb_left").css({"opacity":"0","cursor":"default"});

	//다음보기
    $("#tab1 .thumb_right").click(function(){

        if(num<3){

            $("#tab1 .g_slide_thumb ul").stop(true,true).animate({marginLeft:"-=750px"},200);
            num++;

            if(num==0){
                $("#tab1 .g_slide_thumb>div>div.thumb_left").css({"opacity":"0","cursor":"default","transition":"all 0.3s"});
            }else{
                $("#tab1 .g_slide_thumb>div>div.thumb_left").css({"opacity":"1","cursor":"pointer","transition":"all 0.3s"});
            }
            if(num===3){
                $("#tab1 .g_slide_thumb>div>div.thumb_right").css({"opacity":"0","cursor":"default"});
            }else{
                $("#tab1 .g_slide_thumb>div>div.thumb_right").css({"opacity":"1","cursor":"pointer"});
            }

        }
    });

    //이전보기
    $("#tab1 .thumb_left").click(function(){

        if(num>0){

            $("#tab1 .g_slide_thumb ul").stop(true,true).animate({marginLeft:"+=750px"},200);
            num--;

            if(num==0){
                $("#tab1 .g_slide_thumb>div>div.thumb_left").css({"opacity":"0","cursor":"default","transition":"all 0.3s"});
            }else{
                $("#tab1 .g_slide_thumb>div>div.thumb_left").css({"opacity":"1","cursor":"pointer","transition":"all 0.3s"});
            }
            if(num===3){
                $("#tab1 .g_slide_thumb>div>div.thumb_right").css({"opacity":"0","cursor":"default"});
            }else{
                $("#tab1 .g_slide_thumb>div>div.thumb_right").css({"opacity":"1","cursor":"pointer"});
            }

        }
    });

    
    //*----UI/UX Design----*

	var oldidx2=0;
	var idx2=0;
    var img_n2=$("#tab2 div.g_slide_thumb>ul>li").length;

    function changeImg2(idx){

        if(oldidx2!=idx2){

            $("#tab2 div.g_slide_thumb>ul>li").eq(idx2).addClass("active"); 
            $("#tab2 div.g_slide_thumb>ul>li").eq(oldidx2).removeClass("active");

            $("#tab2 ul#ui_bg li").eq(idx2).stop(true,true).fadeIn(300);
			$("#tab2 ul#ui_bg li").eq(oldidx2).stop(true,true).fadeOut(300);  
			$("#tab2 div.g_slide_detail>ul>li").eq(idx2).stop(true,true).show(); 
			$("#tab2 div.g_slide_detail>ul>li").eq(oldidx2).stop(true,true).hide(); 

        }
        oldidx2=idx2;

    }

	$("#tab2 div.g_slide_thumb>ul>li").click(function(){

        idx2=$(this).index();
		changeImg2(idx2);

    });

	var num2=0;

	
	$("#tab2 .g_slide_thumb>div>div.thumb_left").css({"opacity":"0","cursor":"default"});

	//다음보기
    $("#tab2 .thumb_right").click(function(){

        if(num2<3){

            $("#tab2 .g_slide_thumb ul").stop(true,true).animate({marginLeft:"-=750px"},200);
            num2++;

            if(num2==0){
                $("#tab2 .g_slide_thumb>div>div.thumb_left").css({"opacity":"0","cursor":"default","transition":"all 0.3s"});
            }else{
                $("#tab2 .g_slide_thumb>div>div.thumb_left").css({"opacity":"1","cursor":"pointer","transition":"all 0.3s"});
            }
            if(num2===3){
                $("#tab2 .g_slide_thumb>div>div.thumb_right").css({"opacity":"0","cursor":"default"});
            }else{
                $("#tab2 .g_slide_thumb>div>div.thumb_right").css({"opacity":"1","cursor":"pointer"});
            }

        }
    });

    //이전보기
    $("#tab2 .thumb_left").click(function(){

        if(num2>0){

            $("#tab2 .g_slide_thumb ul").stop(true,true).animate({marginLeft:"+=750px"},200);
            num2--;

            if(num2==0){
                $("#tab2 .g_slide_thumb>div>div.thumb_left").css({"opacity":"0","cursor":"default","transition":"all 0.3s"});
            }else{
                $("#tab2 .g_slide_thumb>div>div.thumb_left").css({"opacity":"1","cursor":"pointer","transition":"all 0.3s"});
            }
            if(num2===3){
                $("#tab2 .g_slide_thumb>div>div.thumb_right").css({"opacity":"0","cursor":"default"});
            }else{
                $("#tab2 .g_slide_thumb>div>div.thumb_right").css({"opacity":"1","cursor":"pointer"});
            }

        }
    });


    $(".btn_planning_view:not(.figma_link)").click(function(){
		$(this).next().show(); 
		$(this).next().find("iframe").animate({"top":"900vh"},1000);
		$("html").css({overflowY:"hidden"});
		$("header #top_menu").animate({"left":"-250px"});
		$(".close").show().css({color:"#fff"});
        $("div.message").hide();
		return false;
	});

	$(".close").click(function(){
        $(this).css({color:"rgba(0,0,0,0.8)"});
		$("#planning .pop").delay(600).fadeOut();
		$("header #top_menu").animate({"left":"0px"});
		$(".btn_planning_view").next().find("iframe").animate({"top":"1000vh"},1000);
		$("html").css({"overflow-y":"scroll"});
        $("div.message").fadeIn();
        $(this).hide();
	});
    $(".close").mouseover(function(){
        $(this).css({"color":"rgb(74, 74, 255)","transition":"0.6s all"});
    });

	
});