import $ from 'jQuery';
import './vendor/jQuery-One-Page-Nav.js';

require('jquery-ui');
require('jquery-ui-touch-punch');
require('modernizr');
require('sticky');
require('wow');

$(document).ready(() => {
  const text = "Testo di prova"
  console.log(text, ": funziona");
});


$(document).ready(() => {
  $('.hero__actions').sticky({
    topSpacing:0,
    zIndex: 100
  });
});

$(document).ready(() => {
  $('#nav').onePageNav({
  });
});

$(document).ready(() => {
  new WOW().init();
  const wow = new WOW({});
});
