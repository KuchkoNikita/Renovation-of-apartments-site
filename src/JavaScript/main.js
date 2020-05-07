$(document).ready(function(){
    $('#brif-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 18,
            },
            phone: {
                required: true,
            },
        },
        messages: {
            username: {
                required: '',
                minlength: '',
                maxlength: '',
            },
            phone: {
                required: '',
                minlength: '',
                maxlength: '',
            },
        }
    });
    $('.offer__form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 18,
            },
            phone: {
                required: true,
            },
        },
        messages: {
            username: {
                required: '',
                minlength: '',
                maxlength: '',
            },
            phone: {
                required: '',
                minlength: '',
                maxlength: '',
            },
        }
    });
    $('#modal-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 18,
            },
            phone: {
                required: true,
            },
        },
        messages: {
            username: {
                required: '',
                minlength: '',
                maxlength: '',
            },
            phone: {
                required: '',
                minlength: '',
                maxlength: '',
            },
        }
    });
    $('.phone').mask('+8 (999) 999-99-99');

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        centerPadding: '30px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }         
        ]
    });
});
new WOW().init();
'use strict';
const button = document.querySelector('button');