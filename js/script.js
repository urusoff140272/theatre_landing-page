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