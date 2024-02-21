$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()>$(window).height()*(0.5/10)){
            $("header").css({"background":"#222","transition":"0.5s all"});
        }else{
            $("header").css({"background":"none","transition":"0.5s all"});
        }

        if($(this).scrollTop()>$(window).height()*(5/10)){
            $("section ul.caution li:nth-child(2)").css({transform:"scale(1)",opacity:"1",transition:"0.8s all"});
        }else{
            $("section ul.caution li:nth-child(2)").css({transform:"scale(0)",opacity:"0"});
        }
        if($(this).scrollTop()>$(window).height()*(7/10)){
            $("section ul.caution li:nth-child(3)").css({transform:"scale(1)",opacity:"1",transition:"0.8s all"});
        }else{
            $("section ul.caution li:nth-child(3)").css({transform:"scale(0)",opacity:"0"});
        }
        if($(this).scrollTop()>$(window).height()*(9/10)){
            $("section ul.caution li:nth-child(4)").css({transform:"scale(1)",opacity:"1",transition:"0.8s all"});
        }else{
            $("section ul.caution li:nth-child(4)").css({transform:"scale(0)",opacity:"0"});
        }
        if($(this).scrollTop()>$(window).height()*(11/10)){
            $("section ul.caution li:nth-child(5)").css({transform:"scale(1)",opacity:"1",transition:"0.8s all"});
        }else{
            $("section ul.caution li:nth-child(5)").css({transform:"scale(0)",opacity:"0"});
        }
    });
    $("section .information li.person img").hide();
    $("section .information li.person img").fadeIn(2000);

});