import '../css/styles.css';

import mainPage from '../js/hb';
import libraryPage from  '../js/myFilmLibraryPage';

import detailsPage from '../js/details';
require('@fortawesome/fontawesome-free/js/all');

const pageName = window.location.hash.replace('#', '')

if (!pageName || '') {
  mainPage()
}

if (pageName === 'inner-page') {
  detailsPage()
}


if (pageName === 'library') {
  libraryPage()
}
