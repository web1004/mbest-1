$(document).ready(function(){

    //스크롤 이벤트
    $(window).scroll(function(){

        //$("#txt1").text($(this).scrollTop());
        if($(this).scrollTop()>100){
            $(".section1_in ul").css({opacity:"1",transition:"all 0.5s ease-out"});
         
        }else{
            $(".section1_in ul").css({opacity:"0",transition:"all 0.2s ease-out"});
        }

    });


});