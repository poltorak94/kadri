$(document).ready(function () {
    $('.custom-input--tel').mask('+7 999 999-99-99');
    let reviews = new Swiper('.reviews-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.reviews .slider-nav--right',
            prevEl: '.reviews .slider-nav--left',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
            }
        }
    });
    let clients = new Swiper('.clients-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.clients .slider-nav--right',
            prevEl: '.clients .slider-nav--left',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
            }
        }
    });

    $('.nav__item').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
    });
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height()

        if (scrollTop > windowHeight) {
            $('.to-top').removeClass('to-top--hidden');
        } else {
            $('.to-top').addClass('to-top--hidden');
        }
    });

    $('.to-top').on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 500);
    });

    $('.politics').on('click', function (e) {
        e.preventDefault();
        $('.politic-modal').removeClass('modal--hidden');
        $('.politic-modal').arcticmodal({
            afterClose: function (data, el) {
                $('.politic-modal').addClass('modal--hidden');
            }
        });
    });

    $('.main-section__form').on('submit', function (e) {
        e.preventDefault();
        $(this).find('.main-section__form-inner').hide();
        $(this).find('.thanks-block').fadeIn();
    });

    $('.callback-form').on('submit', function (e) {
        e.preventDefault();
        $('.container-callback').hide();
        $('.container-thanks').fadeIn();
        $('.callback').css('background', '#00a8ff');
    });

    $('.about-form').on('submit', function (e) {
        e.preventDefault();
        $('.about-form__inner').hide();
        $(this).find('.thanks-block').fadeIn();
    });

    $('.tariff__button').on('click', function (e) {
        e.preventDefault();
        $('.callback-modal').removeClass('modal--hidden');
        $('.callback-modal').arcticmodal({
            afterClose: function (data, el) {
                $('.callback-modal').addClass('modal--hidden');
            }
        });
    });
    $('.callback-modal-form').on('submit', function (e) {
        e.preventDefault();
        $('.callback-modal').arcticmodal('close');
        $('.thanks-modal').removeClass('modal--hidden');
        $('.thanks-modal').arcticmodal({
            afterClose: function (data, el) {
                $('.thanks-modal').addClass('modal--hidden');
            }
        });
    });
    $('.burger').on('click', function (e) {
        e.preventDefault();
        $('.nav__items-container').slideToggle();
    });
});