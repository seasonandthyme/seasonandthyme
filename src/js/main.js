import $ from 'jquery';

document.addEventListener("DOMContentLoaded", function(event) {
  var uri = window.location.href.match(/^.*\/\/.*\/(.*)/)[1];
  if (uri) {
    $('.' + uri).addClass('active-link');
  } else {
    $('.home').addClass('active-link');
  }
});
