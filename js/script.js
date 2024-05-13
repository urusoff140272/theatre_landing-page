const swiperTop = new Swiper('.top__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    speed: 500,

    effect: 'cards',
    cardsEffect: {
        perSlideOffset: 10,
        perSlideRotate: 0,
        slideShadows: false,
        rotate: false,
    },
});

const swiperProjects = new Swiper('.projects__slider', {
    loop: true,
    freeMode: true,
    slidesPerView: 4,
    zoom: {
        maxRatio: 3,
        minRatio: 1,
    },
})

let swiperPartnersTop = new Swiper('.partners__slider-top', {
    loop: true,
    // freeMode: true,
    slidesPerView: 4,
    spaceBetween: 30,
})

let swiperPartnersBottom = new Swiper('.partners__slider-bottom', {
    loop: true,
    // freeMode: true,
    slidesPerView: 4,
    spaceBetween: 30,
})

swiperPartnersTop.controller.control = swiperPartnersBottom;
swiperPartnersBottom.controller.control = swiperPartnersTop;