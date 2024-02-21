$(document).ready(function(){

    //스크롤 이벤트
    $(window).scroll(function(){

        // $("#txt1").text($(this).scrollTop());
        

        if($(this).scrollTop()>100){
            $(".visual_text p").css({opacity:"1",transition:"all 0.5s ease-out",marginTop:"-50px"});
            $(".visual_contents li").css({opacity:"1",transition:"all 0.5s ease-out"});
         
        }else{
            $(".visual_text p").css({opacity:"0",transition:"all 0.2s ease-out",marginTop:"0px"});
            $(".visual_contents li").css({opacity:"0",transition:"all 0.5s ease-out"});
        }

        if($(this).scrollTop()>350&&$(this).scrollTop()<750){
            $(".visual_text ul li:first-child").css({opacity:"1",transition:"all 0.2s ease-out"});
            $(".detail1").show().animate({"top":"100px"},"easeOutBack");
         
        }else{
            $(".visual_text ul li:first-child").css({opacity:"0",transition:"all 0.2s ease-out"});
        }
        if($(this).scrollTop()>=750&&$(this).scrollTop()<1000){
            $(".visual_text ul li:nth-child(2)").css({opacity:"1",transition:"all 0.2s ease-out",});
            $(".detail2").show().animate({"top":"20px"},"easeOutBack");
         
        }else{
            $(".visual_text ul li:nth-child(2)").css({opacity:"0",transition:"all 0.2s ease-out"});
        }
        if($(this).scrollTop()>=1000&&$(this).scrollTop()<1300){
            $(".visual_text ul li:nth-child(3)").css({opacity:"1",transition:"all 0.2s ease-out"});
            $(".detail3").show().animate({"top":"20px"},"easeOutBack");
         
        }else{
            $(".visual_text ul li:nth-child(3)").css({opacity:"0",transition:"all 0.2s ease-out"});
        }
        if($(this).scrollTop()>=1300){
            $(".visual_text ul li:nth-child(4)").css({opacity:"1",transition:"all 0.2s ease-out"});
         
        }else{
            $(".visual_text ul li:nth-child(4)").css({opacity:"0",transition:"all 0.2s ease-out"});
        }

        if($(this).scrollTop()>1800){
            $("#section2>div:first-child>div:first-child").css({left:"200px","transition":"1s all"},500);
        }else{
            $("#section2>div:first-child>div:first-child").css({left:"-1000px","transition":"1s all"},500);
        }

        if($(this).scrollTop()>1600){
            $(".section2_contents li").css({opacity:"1",marginTop:"0px","transition":"1s all"},300);
        }else{
            $(".section2_contents li").css({opacity:"0",marginTop:"50px","transition":"1s all"},300);
        }

    });





});