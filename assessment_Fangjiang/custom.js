$(function () {
    $('.slider').slick({
        // variableWidth: true,
        // infinite: false,
        centerMode: true,
        centerPadding: '350px',
        autoplay: true,
        slidesToShow: 1,
        prevArrow: '<img src="./FrontendTest/Icons/PNGs/left_controller.png" alt="">',
        nextArrow: '<img src="./FrontendTest/Icons/PNGs/right_controller.png" alt="">',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 501,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },

        ]
    });
})


