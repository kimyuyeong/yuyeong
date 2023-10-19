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
    
    floatingCircle('.visual .illust', 1, 30)


    // .con01 
    
    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.con01',
    //         start: '30% 80%',
    //         end: '20% 20%',
    //         scrub: 1,
    //         markers: false,
    //         pin: '.con01'
    //     }
    // })
    // .to('.visual .bottom', {opacity:'0', ease: 'none', duration:5}, 0)
    // .fromTo('.videoWrap video', {'clip-path': 'inset(20% 20% 20% 20% round 5000px)', width :'44%',  top: '-33%', right: '0%'}, {'clip-path': 'inset(0% 0% 0% 0% round 500px)', ease:'none', duration: 10,  width :'90%', top: '-30%', right: '5%'}, 0)

    ScrollTrigger.matchMedia ({
        '(min-width: 1301px)':function(){
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.con01',
                    start: '30% 80%',
                    end: '20% 20%',
                    scrub: 1,
                    markers: false,
                    pin: '.con01'
                }
            })
            .to('.visual .bottom', {opacity:'0', ease: 'none', duration:5}, 0)
            .fromTo('.videoWrap video', {'clip-path': 'inset(20% 20% 20% 20% round 5000px)', width :'44%',  top: '-33%', right: '0%'}, {'clip-path': 'inset(0% 0% 0% 0% round 500px)', ease:'none', duration: 10,  width :'90%', top: '-30%', right: '5%'}, 0)

            // con05 hobby
            let upBox = document.querySelectorAll('.upBox')
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger : '.con05 .hobbyCont',
                    pin :true,
                    scrub: 3,
                    start : '0% 0%',
                    end : '+=200%',
                    // markers : true
                }
            })

            tl.from(upBox,{'y':'250%', 'duration':'10', 'ease':'none','stagger':'15'})
            tl.to(upBox, {'y':'0'},"+=15")

            // con07 portfolio
            // 01. x축 스크롤
            let list = gsap.utils.toArray('.con07 .inner ul li')

            // 02. scrollTween
            let scrollTween = gsap.to(list, {
                xPercent: -100 * (list.length -1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.con07',
                    pin: true,
                    scrub: 1,
                    start: '45% 50%',
                    end: '200%',
                    // markers: true
                }
            })
        }
    });    



    // .con02 banner
    gsap.timeline({
        scrollTrigger: {
            trigger: '.con02',
            start: '0% 70%',
            end: '100% 100%',
            scrub: 1,
            markers: false
        }
    })
    .to ('.con02 .enBanner', {x : '-100%', opacity: '1'},0)
    .to ('.con02 .koBanner', {x : '0' ,opacity: '0.9'},0)
    .to ('.con02 .enBanner2', {x : '-100%', opacity: '0.8'},0)



    // .con03
    gsap.timeline({
        scrollTrigger: {
            trigger: '.con03',
            start: '0% 10%',
            end: '30% 30%',
            scrub: 2,
            // markers: true
        }
    })
    .to('.con03 .top', {x:'-250px', duration: '1', ease: 'none'} , 0.2)


    // con06 works
    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.con06',
    //         start: '0% 50%',
    //         end: '80% 80%',
    //         scrub: 1,
    //         markers: false
    //     }
    // })
    // .fromTo('.con06 .inner .bottom .coding', {'width':'0', 'height':'0',  'duration':'10', 'ease':'elastic'}, {'width':'100%', 'height':'550px', 'duration':'10', 'ease':'none'},0)
    // .fromTo('.con06 .inner .bottom .uiux', {'width':'0', 'height':'0',  'duration':'10', 'ease':'elastic', delay: '2'}, {'width':'60%', 'height':'400px', 'duration':'10', 'ease':'none', delay: '2'},0)
});





























