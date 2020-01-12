import myFilmLibraryPage from '../templates/myFilmLibraryPage.hbs';

export default function () {
  const myFilmLibraryPageContainer = document.querySelector (".main");

  const render = filmData => {
    myFilmLibraryPageContainer.innerHTML = myFilmLibraryPage(filmData.reverse())
   
    addListenersToButtons();
  }

  const addListenersToButtons = () => {
    const btnWatched = document.querySelector(".buttonWatched");
    const btnQueue = document.querySelector(".buttonQueue");
  
    btnWatched.addEventListener("click", () => render (libraryWatched('watched')));
    btnQueue.addEventListener("click", () => render (libraryWatched('queue')));
  }

  function libraryWatched (listType) {
    const list = localStorage.getItem(listType);
    return JSON.parse(list)
  }

  render (libraryWatched('watched'));

  // const watchedOrQeqe = () => {
  //   if (btnQueue.isActive) {
  //     btnWatched.classList.add('button__white');
  //     btnQueue.classList.add('button__active');
  //   }
  // }

  
//   const ActiveBtn (e) => {
//     if (e.isActive) {
//       btnWatched.class
//     }

//   }

//   function toggelBtn(btnToShow, btnToHide) {
//     if (!btnToShow && !btnToHide) return

//     btnToShow.classList.add('show');
//     btnToShow.classList.remove('hide');

//     btnToHide.classList.add('hide');
//     btnToHide.classList.remove('show');
    
// } 
}


