import pets from '../../../assets/files/dataPets.json' assert {type: 'json'};
(() => {
    //slider
    // const pets = [
    //     {
    //         "name": "Jennifer",
    //         "img": "../../assets/images/pets-jennifer.png",
    //         "type": "Dog",
    //         "breed": "Labrador",
    //         "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    //         "age": "2 months",
    //         "inoculations": ["none"],
    //         "diseases": ["none"],
    //         "parasites": ["none"]
    //     },
    //     {
    //         "name": "Sophia",
    //         "img": "../../assets/images/pets-sophia.png",
    //         "type": "Dog",
    //         "breed": "Shih tzu",
    //         "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    //         "age": "1 month",
    //         "inoculations": ["parvovirus"],
    //         "diseases": ["none"],
    //         "parasites": ["none"]
    //     },
    //     {
    //         "name": "Woody",
    //         "img": "../../assets/images/pets-woody.png",
    //         "type": "Dog",
    //         "breed": "Golden Retriever",
    //         "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    //         "age": "3 years 6 months",
    //         "inoculations": ["adenovirus", "distemper"],
    //         "diseases": ["right back leg mobility reduced"],
    //         "parasites": ["none"]
    //     },
    //     {
    //         "name": "Scarlett",
    //         "img": "../../assets/images/pets-scarlet.png",
    //         "type": "Dog",
    //         "breed": "Jack Russell Terrier",
    //         "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    //         "age": "3 months",
    //         "inoculations": ["parainfluenza"],
    //         "diseases": ["none"],
    //         "parasites": ["none"]
    //     },
    //     {
    //         "name": "Katrine",
    //         "img": "../../assets/images/pets-katrine.png",
    //         "type": "Cat",
    //         "breed": "British Shorthair",
    //         "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    //         "age": "6 months",
    //         "inoculations": ["panleukopenia"],
    //         "diseases": ["none"],
    //         "parasites": ["none"]
    //     },
    //     {
    //         "name": "Timmy",
    //         "img": "../../assets/images/pets-timmy.png",
    //         "type": "Cat",
    //         "breed": "British Shorthair",
    //         "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    //         "age": "2 years 3 months",
    //         "inoculations": ["calicivirus", "viral rhinotracheitis"],
    //         "diseases": ["kidney stones"],
    //         "parasites": ["none"]
    //     },
    //     {
    //         "name": "Freddie",
    //         "img": "../../assets/images/pets-freddie.png",
    //         "type": "Cat",
    //         "breed": "British Shorthair",
    //         "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    //         "age": "2 months",
    //         "inoculations": ["rabies"],
    //         "diseases": ["none"],
    //         "parasites": ["none"]
    //     },
    //     {
    //         "name": "Charly",
    //         "img": "../../assets/images/pets-charly.png",
    //         "type": "Dog",
    //         "breed": "Jack Russell Terrier",
    //         "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    //         "age": "8 years",
    //         "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    //         "diseases": ["deafness", "blindness"],
    //         "parasites": ["lice", "fleas"]
    //     }
    // ];
    let containerPets = document.querySelector('.our-pets__wrapper');
    let widthMonitor = document.body.clientWidth;
    let index, countSlides;
    let nextRandomPets = [];
    let currentArrayPets = [];
    const MODALS_OVERLAY = document.querySelector('.modal-overlay'); //контейнер для DOM - элементов
    const BODY_OVERFLOW = document.querySelector('body');
    const firstPageButton = document.querySelector('.our-pets__btn-prev-begin');
    const prevPageButton = document.querySelector('.our-pets__btn-prev');
    const pageNumber = document.querySelector('.our-pets__current-text');
    const nextPageButton = document.querySelector('.our-pets__btn-next');
    const lastPageButton = document.querySelector('.our-pets__btn-next-end');
    let heightSlider = containerPets.style.top;
    const sizeArrayAndCountSlides = () => {
        if (widthMonitor >= 1280) {
            currentArrayPets = [4, 0, 2, 1, 5, 7, 3, 6];
            countSlides = 8;
        }
        if (widthMonitor < 1280 && widthMonitor >= 768) {
            currentArrayPets = [4, 0, 2, 1, 5, 7];
            countSlides = 6;
        }
        if (widthMonitor < 768) {
            currentArrayPets = [4, 0, 2];
            countSlides = 3;
        }
    };
    sizeArrayAndCountSlides();
    //  обнуляем всё после изменения размера экрана

    window.onresize = () => {
        if (MODALS_OVERLAY.classList.contains('modal-overlay--visible')) {
            BODY_OVERFLOW.style.overflow = 'hidden';
        }
        heightSlider = 0;
        containerPets.style.top = 0;
        sizeArrayAndCountSlides();
        pageNumber.textContent = `${1}`;
        disabledButton();
    };

    //проходимся по массиву и добавляем каждый элемент массива в html(создаем первоначальных зверей)
    const elemPetDOM = (index) => {
        return `<div class="our-pets__slide slide-${index}" data-path="${index}">
        <img src="${pets[index].img}" alt="${pets[index].type} ${pets[index].name}" class="pet-icon">
        <h4 class="pet-title">${pets[index].name}</h4>
        <button class="pet-button btn" type="button">Learn more</button>
        </div>`;
    };
    currentArrayPets.forEach((item) => {
        let card = elemPetDOM(item);
        containerPets.innerHTML += card;
    });

    //функция, которая добавляет в наш главный массив array массив(когда наберется 8 зверушек) с рандомными зверюшками, которые не должны повторятся
    const cardPet = () => {
        index = Math.floor(Math.random() * 8)
        currentArrayPets.push(index);
        if (currentArrayPets.length > countSlides) {
            if (nextRandomPets.length >= countSlides) {
                nextRandomPets = [];
            }
            //добавляем и одновременно проверяем на совпадение
            while (nextRandomPets.includes(index)) {
                index = Math.floor(Math.random() * 8);
            }
            nextRandomPets.push(index);
            let card = elemPetDOM(index);
            containerPets.innerHTML += card;
        }
        currentArrayPets.push(index);
    }
    //  вызываем функцию и получаем итоговый массив и 48 зверушек : 8 первоначальных + 5 массивов по 8 рандомных зверушек
    for (let i = 0; i < (48 - countSlides); i++) {
        cardPet();
    }

    //pagination
    const firstBtnClick = () => {
        heightSlider = 0;
        containerPets.style.top = `${0}px`
        pageNumber.textContent = `${1}`
        disabledButton();
    };
    const nextBtnClick = (heightBlock, countArrays) => {
        if (heightSlider < (-heightBlock * countArrays)) {
            heightSlider = -heightBlock * countArrays;
        }
        else {
            heightSlider -= heightBlock;
            containerPets.style.top = `${heightSlider}px`;
            pageNumber.textContent = `${Math.floor(Math.abs(heightSlider) / heightBlock) + 1}`;
        }
        disabledButton();
    };
    const prevBtnClick = (heightBlock) => {
        if (heightSlider >= 0) {
            heightSlider = 0;
        }
        else {
            heightSlider += heightBlock;
            containerPets.style.top = `${heightSlider}px`;
            pageNumber.textContent = `${Math.floor(Math.abs(heightSlider) / heightBlock) + 1}`;

        }
        disabledButton();
    };
    const lastBtnClick = (heightAllBlocks, countAllPages) => {
        heightSlider = -heightAllBlocks;
        containerPets.style.top = `${-heightAllBlocks}px`;
        pageNumber.textContent = `${countAllPages}`;
        disabledButton();
    };
    const disabledButton = () => {
        if (pageNumber.textContent == 1) {
            firstPageButton.setAttribute('disabled', true);
            prevPageButton.setAttribute('disabled', true);
            nextPageButton.removeAttribute('disabled');
            lastPageButton.removeAttribute('disabled');
        }
        else if ((pageNumber.textContent == 6 && widthMonitor >= 1280) || (pageNumber.textContent == 8 && widthMonitor >= 768 && widthMonitor < 1280) || (pageNumber.textContent == 16 && widthMonitor < 768)) {
            firstPageButton.removeAttribute('disabled');
            prevPageButton.removeAttribute('disabled');
            nextPageButton.setAttribute('disabled', true);
            lastPageButton.setAttribute('disabled', true);
        } else {
            firstPageButton.removeAttribute('disabled');
            prevPageButton.removeAttribute('disabled');
            nextPageButton.removeAttribute('disabled');
            lastPageButton.removeAttribute('disabled');
        }
    };
    firstPageButton.addEventListener('click', () => {
        firstBtnClick();
    });
    nextPageButton.addEventListener('click', () => {
        if (widthMonitor >= 1280) {
            nextBtnClick(930, 4);
        } else if (widthMonitor >= 768 && widthMonitor < 1280) {
            nextBtnClick(1395, 7);
        } else {
            nextBtnClick(1395, 15);
        }
    });
    prevPageButton.addEventListener('click', () => {
        if (widthMonitor >= 1280) {
            prevBtnClick(930);
        } else if (widthMonitor >= 768 && widthMonitor < 1280) {
            prevBtnClick(1395);
        } else {
            prevBtnClick(1395);
        }

    });
    lastPageButton.addEventListener('click', () => {
        if (widthMonitor >= 1280) {
            lastBtnClick(4650, 6);
        } else if (widthMonitor >= 768 && widthMonitor < 1280) {
            lastBtnClick(9765, 8);
        } else {
            lastBtnClick(20925, 16);
        }
    });


    //modal window
    const slide = document.querySelectorAll('.our-pets__slide');
    const modals = document.querySelectorAll('.modal');
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
    //для пользователя, отображает массив индексов питомцев,состоящий из подмассивов индексов животных каждой страницы
    console.log("Массив со зверушками \n")
    let arrayAllPets = [];
    let arrayTimePets = [];
    let count = 0;
    for (let el of slide) {

        arrayAllPets.push(el.dataset.path)
        count++;
        if (widthMonitor >= 1280) {
            if (count === 8) {
                arrayTimePets.push(arrayAllPets);
                arrayAllPets = [];
                count = 0;
            }
        }
        if (widthMonitor >= 768 && widthMonitor < 1280) {
            if (count === 6) {
                arrayTimePets.push(arrayAllPets);
                arrayAllPets = [];
                count = 0;
            }

        }
        if (widthMonitor < 768) {
            if (count === 3) {
                arrayTimePets.push(arrayAllPets);
                arrayAllPets = [];
                count = 0;
            }

        }


    }
    console.log(arrayTimePets)
    // });
})();
