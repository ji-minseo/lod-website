const video = document.querySelector('#intro');

    let count = 0;

    let loop = setInterval(()=>{

        count++;

        console.log(count);

        $('#intro .bbb').attr('src',`intro_img/image_${count}.jpg`);

        if( count >= 7){
            $('#intro').addClass('on').delay(2000).fadeOut(function (){
                $('#title').addClass('on');
                $('.left_gnb').addClass('on')
                $('.gnb_icon02').addClass('on')
                $('.gnb').addClass('on')


                $('#section01').addClass('s1')
                $('#section01').addClass('t1')
                $('#section01').addClass('a1')
            });

            clearInterval(loop);
            $('#intro .last_img').css('opacity',1);



        }


    },300)