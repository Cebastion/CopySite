const swiper1 = new Swiper(".swiper1", {
    slidesPerView: 1,
    navigation: {
        enabled: false,
    },
    direction: "horizontal",
    loop: true,
    breakpoints: {
        1025: {
            slidesPerView: 4.2,
            spaceBetween: 30,
            navigation: {
                enabled: true,
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
    },
});

const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1.5,
    direction: "horizontal",
    loop: true,
    navigation: {
        enabled: false,
    },
    breakpoints: {
        1025: {
            slidesPerView: 4,
            navigation: {
                enabled: true,
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
    },
});
