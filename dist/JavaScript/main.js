$(document).ready(function(){
    new WOW().init();
    
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

    function validaters() {
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
    }
    validaters();
    
    function modal() {
        const closeBtn = $('#close-btn');
        const openModal = $('#open-modal-btn');
        const modal = $('.modal');
        openModal.on('click', function(){
            modal.addClass('modal-active');
        });
        closeBtn.on('click', function(){
            modal.removeClass('modal-active');
        });
        modal.on('click', function(event){
            const target = event.target;
            if (!target.closest('.modal-dialog')) {
                modal.removeClass('modal-active');
            }
        });
    }
    modal();

    function sendForm () {
        $('#offer-form').on('submit', function(event) {
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "../php/main.php",
                data: $(this).serialize(),
                dataType: 'json',
                success: function(msg){
                    console.log(msg);
                }, 
                error: function(jqXHR, textStatus) {
                    console.log(jqXHR + ": " + textStatus);
                },
              });
        });
        $('#brif-form').on('submit', function(event) {
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "../php/main.php",
                data: $(this).serialize(),
                dataType: 'json',
                success: function(msg){
                    console.log(msg);
                }, 
                error: function(jqXHR, textStatus) {
                    console.log(jqXHR + ": " + textStatus);
                },
              });
        });
        $('#modal-form').on('submit', function(event) {
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "../php/main.php",
                data: $(this).serialize(),
                dataType: 'json',
                success: function(msg){
                    console.log(msg);
                }, 
                error: function(jqXHR, textStatus) {
                    console.log(jqXHR + ": " + textStatus);
                },
              });
        });
    }
    sendForm();
});




