/* Slider list */
let sliderList = document.querySelectorAll('.featured-slider');
let sliderHouse = document.getElementById('house');
let sliderVilla = document.getElementById('villa');
let sliderAppartment = document.getElementById('appartment');

/* Categoryes list */
let categoryList = document.querySelectorAll('.featured-hat__menu-item');
let buttonHouse = document.getElementById('houseButton');
let buttonVilla = document.getElementById('villaButton');
let buttonAppartment = document.getElementById('appartmentButton');

/* Arrows list */
let arrowsHouse = document.querySelector('.btn-house');
let arrowsVilla = document.querySelector('.btn-villa');
let arrowsAppartment = document.querySelector('.btn-appartment');
let arrowsList = document.querySelectorAll('.featured-hat__navigation');


function changeArrows() {
    arrowsList.forEach(item => {
        item.classList.remove('navigationActive');
    });
}
function chahgeActive() {
    categoryList.forEach(item => {
        item.classList.remove('category-active');
    });
}
function changeSlider() {
    sliderList.forEach(item => {
        item.classList.remove('slider-active');
    });
}

categoryList.forEach((item) => {
    item.addEventListener('click', () => { chahgeActive(); changeSlider(); changeArrows()});
    item.addEventListener('click', () => {
        item.classList.toggle('category-active');
    });
});

buttonHouse.addEventListener('click', () => {
    sliderHouse.classList.add('slider-active');
    arrowsHouse.classList.add('navigationActive');

});
buttonVilla.addEventListener('click', () => {
    sliderVilla.classList.add('slider-active');
    arrowsVilla.classList.add('navigationActive');
});
buttonAppartment.addEventListener('click', () => {
    sliderAppartment.classList.add('slider-active');
    arrowsAppartment.classList.add('navigationActive');
});