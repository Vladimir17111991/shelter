(() => {
    /*----------------------------------HEADER----------------------------------*/
   
    const buttonNotOnly = document.querySelector('.not-only__button');
    buttonNotOnly.addEventListener('click', () => {
        location.href = "#our-pets";
    });
    const buttonAllPets = document.querySelector('.our-pets__button-all-pets');
    buttonAllPets.addEventListener('click', () => {
        location.href = "./pages/pets/index.html";
    });
})();
