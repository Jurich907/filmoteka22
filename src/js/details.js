import detailsPage from '../templates/detailsPage.hbs';

export default function () {
    const apiKey = '50d415b05732f0ef93e0e07a49e48745';
    const imageUrl = 'https://image.tmdb.org/t/p/original';
    
    const main = document.querySelector('.main')
    const refs = {};
    const filmId = new URL(window.location.href).searchParams.get('id') || 100100;
    
    let movie;
    let activeWatchedBtn;
    let activeQueuedBtn;
    
    function fetchFilms(movieID) {
        return fetch(
          `https://api.themoviedb.org/3/movie/${filmId}?api_key=${apiKey}`,
        )
        .then(res => res.json())
        .then(film => {
          film.poster_path = imageUrl + film.poster_path;
          movie = film;
          render(film);
          // console.log(film)
        })
        .catch(error => console.log(error));
      }
    
    fetchFilms()
    
    function render(filmData) {
      concatGenreNamesBYComa(filmData)
      main.innerHTML = detailsPage(filmData)
      addActions()
      showWatchedBtn()
      showQueueBtn()
    }
    
    
    function concatGenreNamesBYComa(filmData) {
      filmData.genres = filmData.genres.reduce((genreString, genre, index, array) => {
        const wordSeparator = index === array.length - 1 ? '' : ','
        return `${genreString} ${genre.name}${wordSeparator}`
      }, '')
    }
    
    function addActions() {
      refs.addToWatchedBtn = document.querySelector("button[data-action='add-to-watched']");
      refs.delFromWatchedBtn = document.querySelector("button[data-action='delete-from-watched']");
      refs.addToQueueBtn = document.querySelector("button[data-action='add-to-queue']");
      refs.delFromQueueBtn = document.querySelector("button[data-action='delete-from-queue']");
      
    
      let types = {
        watched: "watched",
        queue: "queue",
      }
    
      function addToList (listType) {
        let list = localStorage.getItem(listType);
    
        if (!list) {
          list = [];
        } else list = JSON.parse(list);
    
        if (list.find(savedFilm => savedFilm.id === movie.id)) return
    
        list.push(movie);
        localStorage.setItem(listType, JSON.stringify(list));
        showWatchedBtn();
        showQueueBtn();
      }
    
      refs.addToWatchedBtn.addEventListener("click", () => addToList(types.watched));
      refs.addToQueueBtn.addEventListener("click", () => addToList(types.queue));
      
      function removeFromList (listType) {
        let list = localStorage.getItem(listType);
        console.log(listType)
        list = JSON.parse(list);
        if (list.find(savedFilm => savedFilm.id === movie.id)) {
            const reducedList = list.filter(savedFilm => savedFilm.id !== movie.id)
            console.log(list, reducedList);
    
            localStorage.setItem(listType, JSON.stringify(reducedList));
        }
        showWatchedBtn();
        showQueueBtn();
      }
      refs.delFromWatchedBtn.addEventListener('click', () => removeFromList(types.watched));
      refs.delFromQueueBtn.addEventListener('click', () => removeFromList(types.queue));
    
    console.log(refs.delFromWatchedBtn);
    }
    
    function isMovieInWatchedList (movie) {
        const watchedList = localStorage.getItem('watched')
            ? JSON.parse(localStorage.getItem('watched'))
            : []
        return watchedList.find(watchedFilm => watchedFilm.id === movie.id)
    }
    
    function isMovieInQueueList (movie) {
        const queueList = localStorage.getItem('queue')
            ? JSON.parse(localStorage.getItem('queue'))
            : []
        return queueList.find(queueFilm => queueFilm.id === movie.id)
    }
    
    function showWatchedBtn (){
        activeWatchedBtn = isMovieInWatchedList(movie)
            ? toggelBetweenBtn(refs.delFromWatchedBtn, refs.addToWatchedBtn)
            : toggelBetweenBtn(refs.addToWatchedBtn, refs.delFromWatchedBtn);
    }
    function showQueueBtn (){
        activeWatchedBtn = isMovieInQueueList(movie)
            ? toggelBetweenBtn(refs.delFromQueueBtn, refs.addToQueueBtn)
            : toggelBetweenBtn(refs.addToQueueBtn, refs.delFromQueueBtn);
    }
    
    function toggelBetweenBtn(btnToShow, btnToHide) {
        if (!btnToShow && !btnToHide) return
    
        btnToShow.classList.add('show');
        btnToShow.classList.remove('hide');
    
        btnToHide.classList.add('hide');
        btnToHide.classList.remove('show');
        
    } 
}
