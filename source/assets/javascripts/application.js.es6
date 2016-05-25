import $ from 'jQuery';

require('jquery-ui');
require('jquery-ui-touch-punch');
require('modernizr');
require('sticky');

$(document).ready(() => {
  const text = "Testo di prova"
  console.log(text, ": funziona");
});


$(document).ready(() => {
  $('.hero__actions').sticky({topSpacing:0});
});
