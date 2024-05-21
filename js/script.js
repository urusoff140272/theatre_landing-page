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


//--------------БУРГЕР МЕНЮ--------------------------------------------------------------------------
const burgerMenu = document.querySelector('.header__burger');
const navigationMenu = document.querySelector('.header__list');
const menuLinks = document.querySelectorAll('.header__link');
const close = document.querySelector('.header__item-close-image');


if (burgerMenu) {
    burgerMenu.addEventListener("click", openMenu);
}

function openMenu(e) {
    navigationMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    e.stopPropagation();

    addEventListener('click', function (e) {
        if (!e.target.closest('.header__list')) {
            closeMenu()
        }
    })
}


if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', closeMenu)
    })
};


if (close) {
    close.addEventListener('click', closeMenu)
};


function closeMenu() {
    if (navigationMenu.classList.contains('_active')) {
        navigationMenu.classList.remove('_active');
        document.body.classList.remove('_lock')
    }
};
