

const container = document.querySelector('#container');

let scrollPositionX = 0,
    scrollPositionY = 0,
    bodyScrollBar = Scrollbar.init(container, { damping: 0.1, delegateTo: container });


bodyScrollBar.addListener(({ offset }) => {
    scrollPositionX = offset.x;
    scrollPositionY = offset.y;


    let scrollTop = offset.y;

    /* 여기 */
    console.log(scrollTop)


    $('.gnb_icon02').css('transform',`rotate(${scrollTop}deg)`);
    $('#flag').css('transform',`rotate(${scrollTop}deg)`);

    if( scrollTop >= 0){
        $('#section01').addClass('t1')
        //    do something

    }

    if( scrollTop >= 0){
        // $('#section01').addClass('s1')
        //    do something

    }

    // if( scrollTop >= 0){
    //     $('#section01').addClass('a1')
    //     //    do something
    //
    // }

    if( scrollTop >= 510){
        $('#section02').addClass('t2')
        //    do something

    }

    if( scrollTop >= 1000){
        $('#section02').addClass('p1')
        //    do something

    }

    if( scrollTop >= 1200){
        $('#section02').addClass('s2')
        //    do something

    }
    if( scrollTop >= 1700){
        $('#section02').addClass('b1')
        //    do something

    }

    if( scrollTop >= 2700){
        $('#section02').addClass('p2')
        //    do something

    }

    if( scrollTop >= 2400){
        $('#section02').addClass('p3')
        //    do something

    }
    if( scrollTop >= 2017){
        $('#section02').addClass('s3')
        //    do something

    }


    if( scrollTop >= 3584){
        $('#horizontal01').addClass('p4')
        //    do something

    }
    if( scrollTop >= 3584){
        $('#horizontal01').addClass('p5')
        //    do something

    }
    if( scrollTop >= 3584){
        $('#horizontal01').addClass('p6')
        //    do something

    }

    if( scrollTop >= 3584){
        $('#horizontal01').addClass('p7')
        //    do something

    }


    if( scrollTop >= 8400){
        $('#section03').addClass('t4')
        //    do something

    }
    if( scrollTop >= 8600){
        $('#section03').addClass('s4')
        //    do something

    }

    if( scrollTop >= 8900){
        $('#section03').addClass('p8')
        //    do something

    }

    if( scrollTop >= 9100){
        $('#section03').addClass('p9')
        //    do something

    }

    if( scrollTop >= 9200){
        $('#section03').addClass('c1')
        //    do something

    }
    if( scrollTop >= 9910){
        $('#section03').addClass('p10')
        //    do something

    }
    if( scrollTop >= 10084){
        $('#section03').addClass('p11')
        //    do something

    }

    if( scrollTop >= 10300){
        $('#section03').addClass('b2')
        //    do something

    }


    if( scrollTop >= 10981){
        $('#horizontal02').addClass('p13')
        //    do something

    }
    if( scrollTop >= 10981){
        $('#horizontal02').addClass('p14')
        //    do something

    }
    if( scrollTop >= 10981){
        $('#horizontal02').addClass('p15')
        //    do something

    }
    if( scrollTop >= 10981){
        $('#horizontal02').addClass('p16')
        //    do something

    }


    if( scrollTop >= 16200){
        $('#section04').addClass('cr')
        //    do something

    }
    if( scrollTop >= 16200){
        $('#section04').addClass('t5')
        //    do something

    }


    if( scrollTop >= 16900){
        $('#section04').addClass('sub4')
        //    do something

    }
    if( scrollTop >= 17100){
        $('#section04').addClass('p12')
        //    do something

    }
    if( scrollTop >= 17300){
        $('#section04').addClass('r')
        //    do something

    }
    if( scrollTop >= 17300){
        $('#section04').addClass('s5')
        //    do something

    }

    if (scrollTop >= 18100) {
        $('#footer').addClass('f1');
    }
    if (scrollTop >= 18300) {
        $('#footer').addClass('f2');
    }
    if (scrollTop >= 18500) {
        $('#footer').addClass('g1');
    }

    if (scrollTop >= 18700) {
        $('#footer').addClass('f3');
    }
    if (scrollTop >= 18900) {
        $('#footer').addClass('c1');
    }















});
bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();


ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
        if (arguments.length) {
            bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
    }



});


bodyScrollBar.addListener(ScrollTrigger.update);


// mousemove pointer-events
(function () {

    let $mouseX = 0,
        $mouseY = 0,
        $xp = 0,
        $yp = 0,
        $flag =  $("#flag");

    $(document).mousemove(function (e) {
        $mouseX = e.pageX;
        $mouseY = e.pageY;

    });

    let $loop = setInterval(function () {



        $xp += (($mouseX - $xp) / 30);
        $yp += (($mouseY - $yp) / 30);
        $flag.css({left: ($xp-$flag.width()*0.5) + 'px', top: ($yp -$flag.height()*0.5) + 'px'});


    }, 1);




    /* 여기 밑에부터  추가작성 하시면 됩니다 */
    $('.gnb_icon02').click(function () {
        $('#menu').addClass('on')
        $('#menu').addClass('on')






    });
    $('#menu .btn').click(function () {
        $('#menu').removeClass('on')
    });







})();






$('.horizontal').each(function (i,el) {

    // console.log(i)
    var thisSection = $(this);
    var thisPinWrap = thisSection.find('.pin-wrap');
    var thisAnimWrap = thisPinWrap.find('.animation-wrap');
    var thisAnimWrapWidth = thisAnimWrap.width();

    var theseItems = thisAnimWrap.find('.item');
    var theseItemsWidth = theseItems.width();

    var scrollWidth = theseItemsWidth * theseItems.length;


    var windowWidth = $(window).innerWidth();

    var fromValue = 0;
    var toValue = -(scrollWidth - windowWidth);

    var horizontalSectionTween = gsap.fromTo(thisAnimWrap, { x: fromValue }, { x: toValue, ease: "none" });



    ScrollTrigger.create({
        id: "horizontalSectionScrolling",
        trigger: thisSection[0],
        start: "top top",
        end: "+="+thisAnimWrapWidth,
        // end: "+=3000",
        animation: horizontalSectionTween,
        pin: "#pinThis-"+i,
        anticipatePin: 1,
        scrub: true,
        onUpdate: self => {
            if(self.isActive) {
                thisAnimWrap.css({"top": scrollPositionY + "px"});
                console.log('update');
            }
        },
        onLeave: ({progress, direction, isActive}) => {
            thisAnimWrap.css({ "top": "" });
            // thisAnimWrap.css({"top": scrollPositionY + "px"});
            console.log('onLeave');
        },
        onLeaveBack: ({progress, direction, isActive}) => {
            thisAnimWrap.css({"top": ""});
            console.log('onLeaveBack');
        }
    });



})
































