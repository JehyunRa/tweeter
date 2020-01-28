/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function textAreaAdjust(textArea) {
  textArea.style.height = "0px";
  textArea.style.height = (3 + textArea.scrollHeight)+"px";
}

function displayTweets(tweets) {
  for (const tweet of tweets) {
    console.log(tweet.user.name);
    $("#display-tweets").append(`<p>${tweet.user.name}</p>`);
  }
}

function loadTweets() {
  console.log('performing ajax call...');
  $.ajax('/tweets', { method: 'GET' })
  .then(function (result) {
    console.log('Success: ', result);
    displayTweets(result);
  });
}

loadTweets();