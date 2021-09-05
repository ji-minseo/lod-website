window.addEventListener('DOMContentLoaded', function () {


   // $('#section01').addClass('on');


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
        $('.left_gnb').addClass('on')
        $('.gnb_icon02').addClass('on')
        $('.gnb').addClass('on')
        $('#section01').addClass('p1');
        $('#section01').addClass('t1');
        $('#section01').addClass('s1');
})();

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        $('.gnb_icon02').css('transform',`rotate(${scrollTop}deg)`);
        $('#flag').css('transform',`rotate(${scrollTop}deg)`);



        if (scrollTop >= 0) {
            $('#section01').addClass('p1');
        }
        if (scrollTop >= 0) {
            $('#section01').addClass('t1');
        }
        if (scrollTop >= 200) {
            $('#section01').addClass('s1');
        }

        if (scrollTop >= 400) {
            $('#section01').addClass('p3');
        }
        if (scrollTop >= 600) {
            $('#section01').addClass('p2');
        }
        if (scrollTop >= 600) {
            $('#section01').addClass('s2');
        }


        if (scrollTop >= 1700) {
            $('#section02').addClass('s3');
        }

        if (scrollTop >= 1700) {
            $('#section02').addClass('p4');
        }
        if (scrollTop >= 2000) {
            $('#section02').addClass('p5');
        }

        if (scrollTop >= 2400) {
            $('#section02').addClass('on1');
        }

        if (scrollTop >= 2700) {
            $('#section02').addClass('i1');
        }

        if (scrollTop >= 2900) {
            $('#footer').addClass('f1');
        }
        if (scrollTop >= 3100) {
            $('#footer').addClass('f2');
        }
        if (scrollTop >= 3300) {
            $('#footer').addClass('g1');
        }

        if (scrollTop >= 3500) {
            $('#footer').addClass('f3');
        }
        if (scrollTop >= 3700) {
            $('#footer').addClass('c1');
        }





    });





    /*  slide,click event section */
    (function () {







    })();


    


})


