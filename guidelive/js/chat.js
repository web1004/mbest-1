$(document).ready(function(){


    $(".chat").hide();
    $(".chat_btn").click(function(){
        $(this).hide();
        $("#chat_in").animate({
            "width":"300px",
            "height":"500px",
            "border-radius":"10px"},300);
        $("#chat_in").addClass("white_bg");
        $(".chat").fadeIn();
    });

    $(".chat").find(".chat_close").click(function(){
        $(".chat").hide();
        $(".chat_btn").fadeIn();
        $("#chat_in").animate({
            "width":"80px",
            "height":"80px",
            "border-radius":"50%"},300);
        $("#chat_in").removeClass("white_bg");
    });


    //채팅 글자 입력
    var tag = {};
    var counter = 0;

    // 입력한 값을 태그로 생성한다.
    function addTag (value) {
        tag[counter] = value;
        counter++; // del-btn 의 고유 id 가 된다.
    }

    // tag 안에 있는 값을 array type 으로 만들어서 넘긴다.
    function marginTag () {
        return Object.values(tag).filter(function (word) {
            return word !== "";
        });
    }

    // 서버에 제공
    $("#tag-form").on("submit", function (e) {
        var value = marginTag(); // return array
        $("#talk").val(value); 

        $(this).submit();
    });

    $("#talk_input").on("keypress", function (e) {
        var self = $(this);

        //엔터나 스페이스바 눌렀을때 실행
        if (e.key === "Enter") {

            var tagValue = self.val(); // 값 가져오기

            // 해시태그 값 없으면 실행X
            if (tagValue !== "") {
                    $("#talk_list").append("<li class='talk_li'>"+tagValue);
                    addTag(tagValue);
                    self.val("");
            }
        }
    });



});