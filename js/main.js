// main.js

$(function(){
    $('#toggle').click(
        function(){
        $('#gnb > ul').toggleClass('on');
    })

    // 1단계 메뉴에 마우스가 올라가면 depth2가 보임
    // 마우스가 나가면 depth2 안보임
    $('#gnb > ul > li').hover(
        function(){
            $(this).children().addClass('on');
        },
        function(){
            $(this).children().removeClass('on');
        }
    );
   
   
    // 패릴랙스 배경 스크롤
    $.stellar({
        horizontalScrolling: false,
        verticalScrolling: true,
        verticalOffset: 50,
    });
    
});