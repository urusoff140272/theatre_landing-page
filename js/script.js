const swiperTop = new Swiper('.top__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'cards',
    cardsEffect: {
        perSlideOffset: 10,
        perSlideRotate: 0,
        slideShadows:false,
        rotate:false,
    },
});