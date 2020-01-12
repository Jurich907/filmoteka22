export function addActionsToMainPage () {
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
    
    const prevValueOne = () => {
        if (pageNumber === 1) {
      btnPrev.classList.add('disable')}
      }
      
  let numbers = Math.ceil(watchedArray.length / 20)

  let res = '';

  // for (let i = 0; i < numbers; i++) {
  //       res += <button class="pug-btn" data-page="${i + 1}">${i + 1}</button>;
  //   }
  //   const pugNav = document.querySelector("#pug-div");
  //   pugNav.innerHTML = res;

  //   pugNav.addEventListener("click", handleClick);
  //     function handleClick(e) {
  //       console.dir(e.target)
  //       if (e.target.classList.contains("pug-btn")) {
  //           location.hash = #watched?page=${e.target.dataset.page};
  //           console.log(location.hash)
  //       }
  //   }


// btnNext.addEventListener('click', () => console.log(22))
// input.addEventListener('input', () => console.log(11111))


} 


