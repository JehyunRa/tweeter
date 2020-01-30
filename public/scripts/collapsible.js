$(document).ready(function() {

  // toggle new-tweet on / off
  $(".navB").on('click', function() {

    $('.new-tweet').slideToggle(300, 'swing');
    $('#tweetTextArea').focus();

  });
  
  $('.new-tweet').slideUp(300, 'swing');
});
