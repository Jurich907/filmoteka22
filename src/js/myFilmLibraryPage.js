import myFilmLibraryPage from '../templates/myFilmLibraryPage.hbs';

const myFilmLibraryPageContainer = document.querySelector (".main");



function render(filmData) {
  myFilmLibraryPageContainer.innerHTML = myFilmLibraryPage(filmData)
}
const imageUrl = 'https://image.tmdb.org/t/p/original';
function fetchFilms(searchFilm) {
    return fetch(
      'https://api.themoviedb.org/3/movie/75780?api_key=50d415b05732f0ef93e0e07a49e48745',
    )
    .then(res => res.json())
    .then(film => {

      film.poster_path = imageUrl + film.poster_path
      render(film)

    })
  }

fetchFilms('Jack+Reacher')


