const apiUrl = 'https://api.themoviedb.org/3/';
const apiKey = '50d415b05732f0ef93e0e07a49e48745'

export default {
    fetchFilmsByName(name) {
        return fetch(`${apiUrl}search/movie?api_key=${apiKey}&query=${name}`)
            .then(response => response.json())
    },
    fetchPopularFilms(page = 1) {
        return fetch(`${apiUrl}movie/popular?api_key=${apiKey}&page=${page}`)
            .then(response => response.json())
    }
}