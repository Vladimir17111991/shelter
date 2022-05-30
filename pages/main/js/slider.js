import pets from '../../../assets/files/dataMain.json' assert {type: 'json'};
(() => {

    const element = (index) => {
        return `<div class="swiper-slide our-pets__slide slide-${index}" data-path="${index}">
        <img src="${pets[index].img}" alt="${pets[index].type} ${pets[index].name}" class="pet-icon">
        <h4 class="pet-title">${pets[index].name}</h4>
        <button class="pet-button btn">Learn more</button>
        </div>`;
    }
    var widthWindow = document.body.clientWidth;
    const SLIDER = document.querySelector(".our-pets__wrapper");
    const BTN_LEFT = document.querySelector(".our-pets__btn-prev");
    const BTN_RIGHT = document.querySelector(".our-pets__btn-next");
    const ITEM_LEFT = document.querySelector('#item-left');
    const ITEM_CENTER = document.querySelector('#item-center');
    const ITEM_RIGHT = document.querySelector('#item-right');
    const DIRECTION_ARRAY = (arrayDirection) => {
        if (arrayDirection.length >= countSlides * 2) {
            arrayDirection.splice(0, countSlides);
            arrayNextCards.forEach((item) => {
                arrayDirection.push(item);
            });
            arrayNextCards = [];
        }
        while (arrayDirection.includes(index)) {
            index = Math.floor(Math.random() * 8);
        }
        arrayDirection.push(index);
    };
    ITEM_LEFT.innerHTML = "";
    ITEM_CENTER.innerHTML = "";
    ITEM_RIGHT.innerHTML = "";
    let countPets = 0, countSlides = 0;
    let index;
    let arrayNextCards = [], arrayLeftElements = [], arrayRightElements = [];

    const treeDOM = (array, arrayLeft, arrayRight, slides) => {
        arrayLeftElements = arrayLeft;
        arrayRightElements = arrayRight;
        countSlides = slides;
        array.forEach((item) => {

            if (countPets < countSlides) {
                ITEM_LEFT.innerHTML += element(item);
            }
            if (countPets < countSlides * 2 && countPets >= countSlides) {
                ITEM_CENTER.innerHTML += element(item);
            }
            if (countPets >= countSlides * 2) {
                ITEM_RIGHT.innerHTML += element(item);
            }
            countPets++;
        });
    };

    if (widthWindow >= 1280) {
        treeDOM([1, 5, 7, 4, 0, 2, 3, 6, 1], [1, 5, 7], [3, 6, 1], 3);
    }
    else if (widthWindow >= 768 && widthWindow < 1280) {
        treeDOM([5, 7, 4, 0, 2, 3], [5, 7], [2, 3], 2);
    }
    else {
        treeDOM([7, 4, 0], [7], [0], 1);
    }

    const moveRight = () => {
        SLIDER.classList.add('transition-right');
        BTN_RIGHT.removeEventListener('click', moveRight);
        BTN_LEFT.removeEventListener('click', moveLeft);
    };
    const moveLeft = () => {
        SLIDER.classList.add('transition-left');
        BTN_LEFT.removeEventListener('click', moveLeft);
        BTN_RIGHT.removeEventListener('click', moveRight);
    };

    BTN_RIGHT.addEventListener('click', moveRight);
    BTN_LEFT.addEventListener('click', moveLeft);

    SLIDER.addEventListener('animationend', (animation) => {
        let changedItem;

        if (animation.animationName === 'move-right') {
            SLIDER.classList.remove('transition-right');
            changedItem = ITEM_RIGHT;
            ITEM_CENTER.innerHTML = ITEM_RIGHT.innerHTML;
        } else {
            SLIDER.classList.remove('transition-left');
            changedItem = ITEM_LEFT;
            ITEM_CENTER.innerHTML = ITEM_LEFT.innerHTML;
        }

        changedItem.innerHTML = '';
        for (let i = 0; i < countSlides; i++) {
            if (changedItem === ITEM_LEFT) {
                index = Math.floor(Math.random() * 8);
                DIRECTION_ARRAY(arrayLeftElements);
            } else if (changedItem === ITEM_RIGHT) {
                index = Math.floor(Math.random() * 8);
                DIRECTION_ARRAY(arrayRightElements);
            }
            let card = element(index);
            changedItem.innerHTML += card;
            arrayNextCards.push(index);
        }
        BTN_RIGHT.addEventListener('click', moveRight);
        BTN_LEFT.addEventListener('click', moveLeft);
        arrayNextCards = [];

        //modal window
        const slide = document.querySelectorAll('.our-pets__slide');
        const modals = document.querySelectorAll('.modal');
        const MODALS_OVERLAY = document.querySelector('.modal-overlay'); //контейнер для DOM - элементов
        const BODY_OVERFLOW = document.querySelector('body');
        slide.forEach((el) => {
            el.addEventListener('click', () => {
                let path = el.dataset.path;
                modals.forEach((el) => {
                    el.classList.remove('modal--visible');
                });
                document.querySelector(`[data-target = "${path}"]`).classList.add('modal--visible');
                MODALS_OVERLAY.classList.add('modal-overlay--visible');
                MODALS_OVERLAY.classList.contains('modal-overlay--visible') ? BODY_OVERFLOW.style.overflow = 'hidden' : BODY_OVERFLOW.style.overflow = '';
            });
        });
    });
})();