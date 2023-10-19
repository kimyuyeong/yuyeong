// a속성 제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});





// animate
$(function() {
	$('.animate').scrolla({
		mobile: true,
		once: true
	});    
});



// splitting
$(function(){Splitting();});



// 빠른이동 메뉴바
$(function (){
    var $menu     = $('.moveList ul li'),
    $contents = $('.scroll'),
    $doc      = $('html, body');

    $(function () {
        // 해당 섹션으로 스크롤 이동
        $menu.on('click','a', function(e){
            var $target = $(this).parent(),
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            $doc.stop()
                    .animate({
                        scrollTop :offsetTop
                    }, 800);
            return false;
        });
    });

    // menu class 추가
    $(window).scroll(function(){
        var scltop = $(window).scrollTop();
        $.each($contents, function(idx, item){
            var $target   = $contents.eq(idx),
                i         = $target.index(),
                targetTop = $target.offset().top;

            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
            if (!(200 <= scltop)) {
                $menu.removeClass('on');
            }
        })
    });
});



// gsap
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    //범위 랜덤 함수(소수점 2자리까지)
    function random(min, max) { //min~max 범위
        //toFixed()를 통해 반환된 문자 데이터를,
        //parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환
        return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    }

    function floatingCircle(item, delayAfter, size) {
        gsap.to(
            item, //선택자
            random(1.2, 1.5), //1.5~2.5초 사이의 랜덤한 애니메이션 동작 시간
            {
                delay: random(0, delayAfter), //몇초 뒤에 애니메이션을 실행, 지연 시간 설정
                y: size, //transform: translateY(수치)와 같음. 수직으로 움직이는 크기
                repeat: -1, //몇 번 반복하는지를 설정, -1은 무한 반복.
                yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생-위아래 움직임
                ease: Power1.easeInOut //easing 함수 적용
            }
        );
    }
    
    floatingCircle('.visual .inner img', 1, 30)

})


