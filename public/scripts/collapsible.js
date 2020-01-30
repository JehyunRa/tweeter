$(document).ready(function() {

  // toggle new-tweet on / off
  let newTweetCollapse = 0;
  $(".navB").on('click', function() {
    if (newTweetCollapse === 1) $('.new-tweet').slideUp(300, 'swing', () => newTweetCollapse = 0);
    else $('.new-tweet').slideDown(300, 'swing', () => newTweetCollapse = 1);
  });
  
  $('.new-tweet').slideUp(300, 'swing');
});
