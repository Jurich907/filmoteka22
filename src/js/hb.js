import main from '../templates/main.hbs';
// import { addActionsToMainPage } from './main'
import filmAPI from './filmAPI'

const hbContainer = document.querySelector (".main");
console.log(main())

const renderMainPage = (filmList) => {
  hbContainer.innerHTML = main(filmList);
}

const fetchFilmsByName = name => {
    if (!name) return;

    filmAPI.fetchFilmsByName(name)
      .then(({ results }) => {
        console.log(results)
        renderMainPage(results);
      })
  };
  
  const fetchPopularFilms = (page = 1) => {
    return filmAPI.fetchPopularFilms()
      .then(({ results }) => {
        console.log(results)
        renderMainPage(results);
      })
  };
  
  fetchPopularFilms()
    .then(() => addActionsToMainPage())

  const addActionsToMainPage = () => {
    let inputValue = document.querySelector('.search-form__input');
    const input = document.querySelector('.search-form__input');
    const form = document.querySelector('.search-form');
    const btnPrev = document.querySelector('.page_prev');
    const btnNext = document.querySelector('.page_next');
    const btnPageNumber = document.querySelector('.number_page');
    const containerBtn = document.querySelector('.button_page');
    
    let pageNumber = 1;
    let findFilms = [];
    btnPageNumber.innerText = pageNumber;
    
    if (pageNumber === 1) {
      btnPrev.classList.add('disable')
    }

    input.addEventListener('input', (event) => {
      fetchFilmsByName(event.target.value)
    })
}