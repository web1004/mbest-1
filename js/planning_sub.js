//썸네일과 큰 이미지가 바뀌는 함수 만들기
var oldidx=0; //기존 이미지 idx=index
var idx=0; //선택되는 이미지

function changeImg(idx){ //idx는 매개변수 (선택되는 이미지)
    if(oldidx!=idx){ //기존의 이미지와 선택된 이미지가 다를때...
        $(".thumbs li").eq(idx).css({"opacity":1}); //선택된 썸네일 이미지
		$(".thumbs li").eq(oldidx).css({"opacity":0.3}); // 선택되지 않은 기존의 썸네일 이미지		
		$(".largeImg li").eq(idx).stop(true,true).fadeIn(300); //선택된 이미지
		$(".largeImg li").eq(oldidx).stop(true,true).fadeOut(300);  //기존 이미지
    }
    oldidx=idx; //선택된 이미지는 다시 기존이미지로 저장
}

var img_n=$(".thumbs li").length-1;
$(document).ready(function(){

    //썸네일 클릭
    $(".thumbs li").click(function(){
        idx=$(this).index();
        changeImg(idx);
    })

    //이전 버튼
    $(".left_btn").click(function(){
        idx--;
        if(idx<0){ //선택한 이미지가 0일 때 다시 맨뒤부터 시작
            idx=img_n;
        }
        changeImg(idx);
    })

    //다음 버튼
    $(".right_btn").click(function(){
        idx++;
        if(idx>img_n){ //선택한 이미지가 마지막일 때 다시 맨처음부터 시작
            idx=0;
        }

        changeImg(idx);
    })
	
}); 

