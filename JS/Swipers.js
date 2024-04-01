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


const swiper3 = new Swiper(".swiper3", {
    slidesPerView: 1.2,
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
    },
});

const swiper4 = new Swiper(".swiper4", {
    slidesPerView: 1,
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    navigation: {
        enabled: false,
    },
    breakpoints: {
        1025: {
            spaceBetween: 30,
            slidesPerView: 4.5,
            navigation: {
                enabled: true,
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 3.5,
            navigation: {
                enabled: false,
            },
        },
        540: {
            spaceBetween: 30,
            slidesPerView: 2.5,
            navigation: {
                enabled: false,
            },
        },
        320: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
    },
});
