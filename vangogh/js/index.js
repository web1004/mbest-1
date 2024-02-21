$(document).ready(function(){

    var img_w=$("ul.visual_wall_in li").width(); 
    var simg_n=$("ul.visual_wall_in li").length; 
    var soldidx=0;
    var sindex=0; 
    $("section div#animation_timer").addClass("timer1");
    function slideImg(sindex){

        targetX=-(sindex*img_w);

        $("ul.visual_wall_in").animate({marginLeft:targetX},300,"easeOutExpo");
        $(".visual_bottom ul").animate({marginLeft:-targetX},300,"easeOutExpo");
        $(".visual_box li").eq(sindex).stop(true,true).fadeIn(1000); //선택된 이미지 나타남
		$(".visual_box li").eq(soldidx).stop(true,true).fadeOut(1000);  //기존 이미지	사라짐
        $("section div#animation_timer").addClass("timer2");
        soldidx=sindex;
    }

    function slideAuto(){
        sindex++;
        if(sindex==simg_n){
            sindex=0;
        }
        slideImg(sindex);
    }

    auto=setInterval(slideAuto,4000);





    $(".swiper-slide").hide();
    $("#view_point span.view_close").hide();
    $("#view_point>div:first-child").click(function(){
        $(".swiper-slide").fadeIn("fast");
        // $(".back_black").show();
        $("#view_point span.view_close").fadeIn();
        $(this).hide();
    });
    $("#view_point span.view_close").click(function(){
        $(".swiper-slide").fadeOut();
        $(".back_black").hide();
        $(this).hide();
        $("#view_point>div:first-child").fadeIn();
    });

});