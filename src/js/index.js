import '../css/detailsStyles.css';
import detailsPage from '../js/details';
require('@fortawesome/fontawesome-free/js/all');

const pageName = window.location.hash.replace('#', '')

if (pageName === 'inner-page') {
  detailsPage()
}

