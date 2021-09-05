let container;
let stage;

window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    stage = document.querySelector('#container');
    container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();


    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });



    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });


    (function () {


        let v = 0;

        gsap.to(".scroll-content", {
            scrollTrigger: {
                trigger: ".scroll-content",
                start: "top top",
                end: 'bottom bottom',
                scrub: true,
                onUpdate: self => {
                    // console.log("progress:", self.progress)
                    // v = Math.floor(self.progress * 5);
                    // console.log(v)

                }
            }
        });

    })();


})


