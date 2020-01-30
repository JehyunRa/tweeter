$(document).ready(function() {

  // toggle new-tweet on / off
  $(".navB").on('click', function() {
    $('.new-tweet').slideToggle(300, 'swing');
  });
  
  $('.new-tweet').slideUp(300, 'swing');
});
