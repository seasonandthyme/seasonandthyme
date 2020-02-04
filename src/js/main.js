import $ from 'jquery';

document.addEventListener("DOMContentLoaded", function(event) {
  var uri = window.location.href.match(/^.*\/\/.*\/(.*)/)[1];
  if (uri) {
    $('.' + uri).addClass('active-link');
  } else {
    $('.home').addClass('active-link');
  }
  $('#mobile-navigation-label').on('click', function() {
    $('#mobile-navigation').toggleClass('sqs-mobile-nav-open');
  });
});
