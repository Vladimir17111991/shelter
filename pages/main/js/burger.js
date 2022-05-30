(() => {
    const menu = document.querySelector('#menu-burger');
    const BTN_BURGER_OPEN = document.querySelector('#burger-btn');
    const BURGER_LINKS = document.querySelectorAll('.item-href');
    const header = document.querySelector('.header');
    const bodyOverflow = document.querySelector('body');
    const HEADER_CONTAINER = document.querySelector('.header__container');
    let widthWindow = document.body.clientWidth;
    const headerStyle = (height, background) => {
        header.style.height = height;
        header.style.background = background;
    };

    //проверка, при загрузке страницы, если меньше 768px то добавляем видимость нашему меню в бургере
    if (widthWindow < 768) {
        menu.classList.add('hidden');
    }

    BTN_BURGER_OPEN.addEventListener('click', () => {
        // добавляем остутствие скрола при отрытом бургере
        menu.classList.contains('hidden') && !BTN_BURGER_OPEN.classList.contains('is-active-burger-button')
            ? bodyOverflow.style.overflow = 'hidden'
            : bodyOverflow.style.overflow = '';

        //если нажали на затемненную область закрываем плавно меню
        header.addEventListener('click', (e) => {

            // console.log(header.attributes)
            if (e.target == header || e.target == HEADER_CONTAINER) {
                BTN_BURGER_OPEN.classList.remove('is-active-burger-button');
                setTimeout(() => {
                    bodyOverflow.style.overflow = '';
                    menu.classList.add('hidden');
                    headerStyle('unset', 'transparent');
                    HEADER_CONTAINER.classList.remove('reset-color');
                }, 200);
                menu.classList.remove('is-active-burger');
            }
        });
        // устанавливаем высоту хидеру, для корректного открытия бургер-меню
        if (!menu.classList.contains('is-active-burger')) {
            headerStyle('823px', 'rgba(41, 41, 41, 0.6)',);
            HEADER_CONTAINER.classList.add('reset-color');
        }
        //добавляем нашему меню display:none, но чтобы он плавно проподал через SetTimeout
        BTN_BURGER_OPEN.classList.toggle('is-active-burger-button');
        menu.classList.toggle('is-active-burger');
        if (menu.classList.contains('hidden')) {
            menu.classList.toggle('hidden');
        } else {
            setTimeout(function () {
                menu.classList.add('hidden');
                headerStyle('unset', 'transparent');
                HEADER_CONTAINER.classList.remove('reset-color');
            }, 200);
        }
    });
    if (!menu.classList.contains('is-active-burger')) {
        if (widthWindow < 768) {
            headerStyle('unset', 'transparent');
            bodyOverflow.style.overflow = '';
        }
    }
    //закрываем окно бургера после нажатия на ссылку
    //и добавляем закрытие бургера на нажатие вне ссылок
    menu.addEventListener('click', (e) => {
        BURGER_LINKS.forEach((el) => {
            if (e.target !== el) {
                if (widthWindow < 768) {
                    bodyOverflow.style.overflow = '';
                    BTN_BURGER_OPEN.classList.remove('is-active-burger-button');
                    menu.classList.remove('is-active-burger');
                    setTimeout(() => {
                        headerStyle('unset', 'transparent');
                        HEADER_CONTAINER.classList.remove('reset-color');
                        menu.classList.add('hidden');
                    }, 200);
                }
            } else {
                el.addEventListener('click', function () {
                    if (widthWindow < 768 && !menu.classList.contains('is-active-burger')) {
                        //после нажатия на кнопку, при переходе, окно бургера закрылось с задержкой
                        setTimeout(() => {
                            menu.classList.add('hidden');
                            menu.classList.toggle('is-active-burger');
                            BTN_BURGER_OPEN.classList.toggle('is-active-burger-button');
                        }, 200);
                    }
                });
            }
        });
    });
    //header link.adding line border's highlight
    const arrayBtn = document.querySelectorAll('.item-href');
    arrayBtn.forEach(function (itemButton) {
        itemButton.addEventListener('click', function (event) {
            arrayBtn.forEach((item) => {
                item.classList.remove('is-active');
            });
            event.target.classList.add('is-active');
        });
    });
    //делаем сброс кнопки, меню, высоты по изменению ширины экрана
    window.addEventListener("resize", () => {
        widthWindow = document.body.clientWidth;
        bodyOverflow.style.overflow = '';
        menu.classList.remove('is-active-burger');
        BTN_BURGER_OPEN.classList.remove('is-active-burger-button');
        // убираем высоту с задержкой
        if (widthWindow > 767) {
            setTimeout(function () {
                menu.classList.remove('hidden');
            }, 200);
            headerStyle('unset', '');
        } else {

            setTimeout(function () {
                headerStyle('unset', '');
                menu.classList.add('hidden');
                HEADER_CONTAINER.classList.remove('reset-color'); // этот класс только для бургера на странице our-pets
            }, 200);
        }
    });
})();