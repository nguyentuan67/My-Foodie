AOS.init({
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'ease-out',
});

$('.rank-slide').slick({
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerMode: true,
                centerPadding: '200px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1023,
            settings: {
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerMode: false,
                slidesToShow: 1,
            }
        }
    ]
});

// swiper slide
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    speed: 800,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});