$(document).ready(function () {
    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.check-lb').on('click',function(e){
        e.preventDefault();
        $('.check-img1').toggleClass('hidden');
        $('.check-img2').toggleClass('hidden');
    });

    $('.submit-btn').on('click',function(e){
        e.preventDefault();
        $('.modal').toggleClass('active');
        $('.overlay1').toggleClass('active');
    });

    

    $('.mob-down-btn').on('click',function(e){
        e.preventDefault();
        $('.about-me-section .about-right').toggleClass('active');
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".modal"); // тут указываем class элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
            $('.overlay1').removeClass('active'); // скрываем его
        }
    });

    $('.img-block').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="../img/icons/arrow.svg" alt="">','<img src="../img/icons/arrow.svg" alt="">'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            },
            1400:{
                items:1,
            }
        }
    });

    if($(window).width() < 700) {
        $('.marketing-support-content').owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            dots:true,
            center: false,
            smartSpeed:900,
            items:1,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:1,
                },
                1400:{
                    items:1,
                }
            }
        });
    };

    $('.imag-block').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            },
            1400:{
                items:1,
            }
        }
    });
    

    if($(window).width() < 700) {
        $('.header-section .header-section-main .header-section-left .header-section-btns .header-btn-pri').text('Получить подробную информацию');
    }

    if($(window).width() < 700) {
        $('.have-qu-btn').text('Стать партнером');
        $('.have-questions-section .get_free_con button.have-qu-btn').removeClass('submit-btn');
        
        $('.have-qu-btn').on('click',function(e){
            e.preventDefault();
            $('.modal').toggleClass('active');
            $('.overlay1').toggleClass('active');
            $('.overlay2').toggleClass('active');
            $('.have-question-form-modal').toggleClass('active');
        });

        $('.free-consultation-link').on('click',function(e){
            e.preventDefault();
            $('.overlay3').toggleClass('active');
            $('.have-question-form-modal-white').toggleClass('active');
        });
    
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".have-question-form-modal"); // тут указываем class элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('active'); // скрываем его
                $('.overlay2').removeClass('active'); // скрываем его
            }
        });

        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".have-question-form-modal-white"); // тут указываем class элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('active'); // скрываем его
                $('.overlay3').removeClass('active'); // скрываем его
            }
        });
    }

});
