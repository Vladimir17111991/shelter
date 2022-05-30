import pets from '../../../assets/files/dataMain.json' assert {type: 'json'};
(() => {
    
    const array = [4, 0, 2, 1, 5, 7, 3, 6];
    const modalsOverlay = document.querySelector('.modal-overlay'); //контейнер для DOM - элементов
    const createModal =(index)=>{
        return `<div class="modal modal-pet-${index}" data-target="${index}">
                    <img src="${pets[index].img}" alt="${pets[index].type} ${pets[index].name}" class="modal-image">
                    <div class="modal-info">
                    <h3 class="modal-title title-h3">${pets[index].name}</h3>
                    <h4 class="modal-title title-h4"> ${pets[index].type} - ${pets[index].breed}</h4>
                    <h5 class="modal-title title-h5">${pets[index].description}</h5>
                    <ul class="modal-list">
                        <li class="modal-item">
                            <div class="item-info">
                                <h5 class="modal-item-title">Age:&nbsp;</h5>
                                <p class="modal-item-descr">${pets[index].age}</p>
                            </div>
                        </li>
                        <li class="modal-item">
                            <div class="item-info">
                                <h5 class="modal-item-title">Inoculations:</h5>
                                <p class="modal-item-descr">${pets[index].inoculations.toString()}</p>
                            </div>
                        </li>
                        <li class="modal-item">
                            <div class="item-info">
                                <h5 class="modal-item-title">Diseases:&nbsp;</h5>
                                <p class="modal-item-descr">${pets[index].diseases.toString()}</p>
                            </div>
                        </li>
                        <li class="modal-item">
                            <div class="item-info">
                                <h5 class="modal-item-title">Parasites:&nbsp;</h5>
                                <p class="modal-item-descr">${pets[index].parasites.toString()}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <button class="modal-btn-close btn">
                    <svg class="modal-btn-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z"
                        fill="#292929" />
                    </svg>
                </button>
             </div>`
    }; 
    modalsOverlay.innerHTML = "";
    array.forEach((item) => {
        modalsOverlay.innerHTML += createModal(item);
    });
})();