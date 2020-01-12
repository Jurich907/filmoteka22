export function addActionsToMainPage () {
    let inputValue = document.querySelector('.search-form__input');
    const input = document.querySelector('.search-form__input');
    const form = document.querySelector('.search-form');
    const btnPrev = document.querySelector('.page_prev');
    const btnNext = document.querySelector('.page_next');
    console.dir(btnNext)
    const btnPageNumber = document.querySelector('.number_page');
    const containerBtn = document.querySelector('.button_page');
    
    let pageNumber = 1;
    let findFilms = [];
    btnPageNumber.innerText = pageNumber;
    
    const prevValueOne = () => {
        if (pageNumber === 1) {
      btnPrev.classList.add('disable')}
      }
      


btnNext.addEventListener('click', () => console.log(22))
input.addEventListener('input', () => console.log(11111))


} 


