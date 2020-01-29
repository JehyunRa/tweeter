$(document).ready(function() {

  let newTweetCollapse = 1;
  $(".navB").on('click', function() {
    if (newTweetCollapse === 1) $('.new-tweet').slideUp(300, 'swing', () => newTweetCollapse = 0);
    else $('.new-tweet').slideDown(300, 'swing', () => newTweetCollapse = 1);
  });
  
});
