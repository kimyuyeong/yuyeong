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








// 마우스 포인터 hober 이미지
$(function(){
    
});




// gsap
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    // 01. visual 사라지는 단어
    gsap.timeline({
        scrollTrigger: {
            trigger: '.visual',
            start: 'top top',
            end: '150% 80%',
            scrub: 1,
            // markers:true
        }
    })

    .to ('.visual .inner .text .line2', {'x':'40%', 'ease':'none', 'duration':'10'},.5)
    .to ('.visual .inner .text .line3', {'x':'50%', 'ease':'none', 'duration':'10'},.6)
    .to ('.visual .inner .text .line1', {'transform':'scale(0.7)', 'ease':'none', 'duration':'10', left:'3.5%', top: '150%'},1)




    ScrollTrigger.matchMedia ({
        '(min-width: 1301px)':function(){
            let activeImg;

            gsap.utils.toArray('.con01 .inner ul li a').forEach((elem) => {
                let image = elem.querySelector('img.fadeImg'),
                // .con02 ul li a를 배열로 만들어 forEach문으로 elem매개변수로 받아서 반복문 실행, elem의 하위요소 showImg를 image에 저장

                align = e => {
                    setX(e.clientX);
                    setY(e.clientY);
                },
                // 이벤트 발생시 현재 마우스 위치의 x, y 좌표를 setX, setY 변수에 할당한다.

                startPoint = () => document.addEventListener('mousemove', align),
                // startPoint 함수는 mousemove와 align함수가 실행되는 함수
                stopPoint = () => document.removeEventListener('mousemove', align),
                // stopPoint 함수는 mousemove와 align함수가 제거되는 함수

                fade = gsap.to(image, {autoAlpha: 0.8, ease:'none', paused:true})
                // 이미지가 자동 투명도 0.8이 되어 일시정지해 변수 fade에 대입


                // .con02 ul li a영역에 들어갔을 때 fade변수가 실행되고 startPoint()함수가 호출되어라
                elem.addEventListener('mouseenter', (e) => {
                    fade.play();
                    startPoint();


                    // active img가 활성되는 조건문, gsap바로 세팅
                    if(activeImg) {
                        gsap.set(image, {x: gsap.getProperty(activeImg , "x"), y: gsap.getProperty(activeImg , "y")});
                    }

                    // 이미지의 X축은 activeImg의 x값을 반환하고 이미지의 y축은 activeImg의 y값을 반환하고 
                    //gsap.getProperty()는 (activImage의 X값)=> 속성을 반환

                    activeImg = image;
                    setX = gsap.quickTo(image, "x", {duration:0.1, ease:Elastic}),
                    setY = gsap.quickTo(image, "y", {duration:0.1, ease:Elastic})

                    align(e);
                    // 이벤트 시 마우스 위치의 x,y 좌표를 setX, setY 변수에 할당하는 함수호출
                });

                elem.addEventListener('mouseleave', () => fade.reverse())
                // .reverse() => 애니메이션 모든 측면이 뒤로 향하도록 재생 반전
            });







            // 02. design
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.con03',
                    start: 'top top',
                    end: '250%',
                    scrub: 1,
                    pin: true,
                    // markers:true
                }
            })
            .to('.con03 ul', {'y':'-65%', 'ease':'none', 'duration':'15'}, "+=5")
        }
    });
    
})










