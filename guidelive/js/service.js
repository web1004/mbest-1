$(document).ready(function(){

    //스크롤 이벤트
    $(window).scroll(function(){

        //$("#txt1").text($(this).scrollTop());

        if($(this).scrollTop()>100){
            $("#section1 ul.section1_contents").css({opacity:"1","margin-top":"0px",transition:"all 0.2s ease-out"});
        }else{
            $("#section1 ul.section1_contents").css({opacity:"0","margin-top":"50px",transition:"all 0.5s ease-out"});
        }


        if($(this).scrollTop()>400){

            if($(this).scrollTop()>600){

                if($(this).scrollTop()>800){

                    if($(this).scrollTop()>1000){

                        if($(this).scrollTop()>1300){
                            $("#section2>div:first-child").css({"background-positionY":"-700px",transition:"all 0.2s ease-out"});
                        }else{
                            $("#section2>div:first-child").css({"background-positionY":"-600px",transition:"all 0.2s ease-out"});
                        }

                    }else{
                        $("#section2>div:first-child").css({"background-positionY":"-500px",transition:"all 0.2s ease-out"});
                    }

                }else{
                    $("#section2>div:first-child").css({"background-positionY":"-400px",transition:"all 0.2s ease-out"});
                }

            }else{
                $("#section2>div:first-child").css({"background-positionY":"-300px",transition:"all 0.2s ease-out"});
            }

        }else{
            $("#section2>div:first-child").css({"background-positionY":"-200px",transition:"all 0.2s ease-out"});
        }
        

       
    });

    var img_w=$(".slide li").width(); //이미지의 가로 너비
    var simg_n=$(".slide li").length; //이미지의 총 개수
    var soldidx=0; //기존이미지
    var sindex=0; //선택된 새 이미지

    //index번째 비주얼 이미지 이동하는 함수 생성
    function slideImg(sindex){

        targetX=-(sindex*img_w); // 움직이는 거리(너비)

        $(".slide").animate({left:targetX},1000)
        $(".slide_btn li").eq(soldidx).removeClass("active"); //기존 버튼 활성화
        $(".slide_btn li").eq(sindex).addClass("active"); //선택 버튼 활성화
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
    $(".slide_btn li").click(function(){

        clearInterval(auto); //버튼 클릭 시 자동함수 해지

        sindex=$(this).index();
        slideImg(sindex);
        auto=setInterval(slideAuto,4000); //버튼 클릭안할 땐 다시 자동함수 실행

    })



});