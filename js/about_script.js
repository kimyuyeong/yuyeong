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








// gsap
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia ({
        '(min-width: 1301px)':function(){
            // con02 timeline
            // 01. x축 스크롤
            let list = gsap.utils.toArray('.con02 .bottomCont ul li')

            // 02. scrollTween
            let scrollTween = gsap.to(list, {
                xPercent: -100 * (list.length -1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.con02 .bottomCont',
                    pin: true,
                    scrub: 1,
                    start: 'center center',
                    end: '600%',
                    // markers: true
                }
                
            })

            // 03. svg
            gsap.to('.svg', {
                xPercent: -30 * ('.svg'.length -1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.con02 .bottomCont',
                    pin: true,
                    scrub: 1,
                    start: 'center center',
                    end: '600%',
                    // markers: true
                }
            })

            // 04. textBox 나타나는 효과
            gsap.utils.toArray('.con02 .bottomCont ul li .textBox').forEach(function(textBox){

                gsap.timeline({
                    scrollTrigger: {
                        trigger: textBox,
                        containerAnimation: scrollTween,
                        start: 'center right',
                        end: 'center 55%',
                        scrub: true,
                        // markers: true
                    }
                })
                .to(textBox, {'opacity':'1','ease':'none','duration':'1.5'}, .2)
            });

            // 05. ball 커지는 효과
            gsap.utils.toArray('.con02 .bottomCont ul li .ball').forEach(function(ball){

                gsap.timeline({
                    scrollTrigger: {
                        trigger: ball,
                        containerAnimation: scrollTween,
                        start: 'center right',
                        end: 'center center',
                        scrub: true,
                        // markers: true
                    }
                })
                .to(ball, {'transform':'scale(1)','ease':'none','duration':'1.5'}, .2)
            });


            // con03 strengths
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.con03',
                    start: 'top top',
                    end: '+300%',
                    scrub: 1,
                    pin: true,
                    // markers:true
                }
            })
            .to('.con03 .right', {'y':'-350%', 'ease':'none', 'duration':'5'}, "+=0.5")

            gsap.timeline({
                scrollTrigger:{
                    trigger: '.con03',
                    start: 'top 50%',
                    end: '+280%',
                    scrub: 1,
                    // markers:true
                }
            })
            .fromTo('.con03 .inner .right ul li.box1', {'opacity': '1', 'transform':'scale(1)', 'ease':'none', 'duration':'5'}, {'opacity': '1', 'transform':'scale(1)', 'ease':'none', 'duration':'5'})
            .to('.con03 .inner .right ul li.box2', {'opacity': '1', 'transform':'scale(1)', 'ease':'none', 'duration':'5'})
            .to('.con03 .inner .right ul li.box3', {'opacity': '1', 'transform':'scale(1)', 'ease':'none', 'duration':'5'})
            .to('.con03 .inner .right ul li.box4', {'opacity': '1', 'transform':'scale(1)', 'ease':'none', 'duration':'5'})





            // con04 hobby
            // 01. exhibition
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.con04 .exhibition',
                    start: '0% 110%',
                    end: '0% 20%',
                    scrub: 1,
                    // markers: true
                }
            })
            .fromTo ('.con04 .exhibition .subTitle .sameTitle',{x: '-100%'},{x:'0%', ease:'none', duration:5},0)
            .fromTo ('.con04 .exhibition .subTitle .sameSub',{x: '100%'},{x:'0%', ease:'none', duration:5},0)
            .to ('.con04 .exhibition .subTitle',{position:'fixed', left:'0', top:'0', ease:'none', duration:5},0)
            .fromTo ('.exhibitionList',{margin: '0 auto'}, {margin: '130vh auto 0', position: 'relative', zIndex:'10', duration:1},0)

            gsap.timeline ({
                scrollTrigger: {
                    trigger: '.exhibitionList',
                    start: '100% 50%',
                    end: '100% 0%',
                    scrub:1,
                    // markers: true
                }
            })
            .to ('.con04 .exhibition .subTitle .sameTitle', {x: '-100%', ease: 'none', duration:5},0)
            .to ('.con04 .exhibition .subTitle .sameSub', {x: '100%', ease: 'none', duration:5},0)


            // 02. drawing
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.con04 .drawing',
                    start: '0% 110%',
                    end: '0% 20%',
                    scrub: 1,
                    // markers: true
                }
            })
            .fromTo ('.con04 .drawing .subTitle .sameTitle',{x: '-100%'},{x:'0%', ease:'none', duration:5},0)
            .fromTo ('.con04 .drawing .subTitle .sameSub',{x: '100%'},{x:'0%', ease:'none', duration:5},0)
            .to ('.con04 .drawing .subTitle',{position:'fixed', left:'0', top:'0', ease:'none', duration:5},0)
            .fromTo ('.drawingList',{margin: '0 auto'}, {margin: '130vh auto 0', position: 'relative', zIndex:'10', duration:1},0)

            gsap.timeline ({
                scrollTrigger: {
                    trigger: '.drawingList',
                    start: '100% 50%',
                    end: '100% 0%',
                    scrub:1,
                    // markers: true
                }
            })
            .to ('.con04 .drawing .subTitle .sameTitle', {x: '-100%', ease: 'none', duration:5},0)
            .to ('.con04 .drawing .subTitle .sameSub', {x: '100%', ease: 'none', duration:5},0)


            // 03. fashion
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.con04 .fashion',
                    start: '0% 110%',
                    end: '0% 20%',
                    scrub: 1,
                    // markers: true
                }
            })
            .fromTo ('.con04 .fashion .subTitle .sameTitle',{x: '-100%'},{x:'0%', ease:'none', duration:5},0)
            .fromTo ('.con04 .fashion .subTitle .sameSub',{x: '100%'},{x:'0%', ease:'none', duration:5},0)
            .to ('.con04 .fashion .subTitle',{position:'fixed', left:'0', top:'0', ease:'none', duration:5},0)
            .fromTo ('.fashionList',{margin: '0 auto'}, {margin: '150vh auto 0', position: 'relative', zIndex:'10', duration:1},0)

            gsap.timeline ({
                scrollTrigger: {
                    trigger: '.fashionList',
                    start: '100% 50%',
                    end: '100% 0%',
                    scrub:1,
                    // markers: true
                }
            })
            .to ('.con04 .fashion .subTitle .sameTitle', {x: '-100%', ease: 'none', duration:5},0)
            .to ('.con04 .fashion .subTitle .sameSub', {x: '100%', ease: 'none', duration:5},0)

        }
    });

});







