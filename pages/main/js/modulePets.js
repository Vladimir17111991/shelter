
(() => {
    const SLIDE = document.querySelectorAll('.our-pets__slide');
    const MODALS_OVERLAY = document.querySelector('.modal-overlay');
    const btnModalClose = document.querySelectorAll('.modal-btn-close');
    const MODALS = document.querySelectorAll('.modal');
    const BODY_OVERFLOW = document.querySelector('body');
    let widthMonitor = document.body.clientWidth;
    const removeVisible = (modals) =>{
        modals.forEach(e => {
            e.classList.remove('modal--visible');
        })
        MODALS_OVERLAY.classList.remove('modal-overlay--visible');
        BODY_OVERFLOW.style.overflow = '';
    };

    SLIDE.forEach((el) => {
        el.addEventListener('click', () => {
            MODALS_OVERLAY.classList.contains('modal-overlay--visible') ? BODY_OVERFLOW.style.overflow = 'hidden' : BODY_OVERFLOW.style.overflow = '';
            let path = el.dataset.path;
            MODALS.forEach((el) => {
                el.classList.remove('modal--visible');
            });
            document.querySelector(`[data-target = "${path}"]`).classList.add('modal--visible');
            MODALS_OVERLAY.classList.add('modal-overlay--visible');
            BODY_OVERFLOW.style.overflow = 'hidden';
        });
    });

    //add close window on click on button
    btnModalClose.forEach((el) => {
        el.addEventListener('click', () => {
            removeVisible(MODALS);
        })
    });

    //add close window on click at the empty
    MODALS_OVERLAY.addEventListener('click', (e) => {
        e.target.addEventListener('click', function (el) {
            if (el.target !== MODALS_OVERLAY && el.target !== btnModalClose) {
                return;
            } else {
                removeVisible(MODALS);
            }
        });
    });
    window.onresize = () => {
        if (MODALS_OVERLAY.classList.contains('modal-overlay--visible')) {
            BODY_OVERFLOW.style.overflow = 'hidden';
        }
        var newWidthMonitor = window.innerWidth;
        // каждые 40% ширины экрана перезагружаем страницу
        if (newWidthMonitor >= widthMonitor * 1.4 || newWidthMonitor <= widthMonitor * 0.6 /*newWidthMonitor === 320 || newWidthMonitor === 768 || newWidthMonitor === 1280*/) {
            location.reload();
            // console.log(newWidthMonitor)
        }
    };
})();
