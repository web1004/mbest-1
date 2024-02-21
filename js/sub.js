$(document).ready(function(){
    
    //따라다니는 메뉴 
    $(window).scroll(function(){
        var curpos=$(window).scrollTop()+$(window).height()-270; // 브라우저에 스크롤이 발생하는 순간부터
        $("div#btn_link").stop().animate({"top":curpos}); //스크롤상단 위치값을 저장
    });

    // window.addEventListener("scroll", function() {
    //     let posW = window.scrollY
    //     if (posW < 100 || posW > 800) $("#navi").removeClass("slideUp")
    //     else $("#navi").addClass("slideUp") // 특정 위치에서 메뉴 숨김
    // })

    window.addEventListener("wheel", function(e) {
        if (e.wheelDelta < 0) $("#navi").addClass("slideUp") 
        else $("#navi").removeClass("slideUp") 
    })

	
});