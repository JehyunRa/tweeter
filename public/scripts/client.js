/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // calculate length of time between when post was made and now
  // function numberToDate(num) {
  //   return moment(num).fromNow();
  // }

  // create tweet container for each tweet
  //(for unknown reason moment.js is calculating time 10 min ago as default so I've added 600000 milliseconds)
  function createTweetElements(tweet) {
    const markup = `
        <article class="center">
          <div class="wrapperNewTweet">
            <div class="tweetA"><img src=${tweet.user.avatars}></img></div>
            <div class="tweetB flexParent flexSB">
              <p>${tweet.user.name}</p>
              <p class="hoverText">${tweet.user.handle}</p>
            </div>
          </div>
          <div>
            <div>${tweet.content.text}</div>
          </div>
          <hr2/>
          <div class="flexParent flexSB">
            <p>${moment(tweet.created_at + 600000).fromNow()}</p>
            <p>🏳️🔃💟</p>
          </div>
        </article>
      `;
    return markup;
  };
  
  // GET the database tweets and call createTweetElements on each of them and append result
  function renderTweets() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (tweets) {
      $("#display-tweets").empty();
      for (const tweet of tweets) {
        let markup = createTweetElements(tweet);
        $("#display-tweets").append(markup);
      }
    })
  };

  // remove harmful inputs
  const escape =  function(str) {
    return `%3Cdiv%3E${str}%3Cdiv%3E`;
  }

  // POST the new-tweet to the server and call GET function
  function postTweet(form) {
    // reset textbox size
    $('#counter').text(140);
    $('#tweetTextArea').css("height", 31 + "px");

    let data = `text=${escape($(form).serialize().slice(5))}`;
    document.getElementById("tweetTextArea").value = ""
    $.ajax({
      url: '/tweets',
      data,
      method: "POST"
    }).then(() => {
      renderTweets();
    })
  };

  // when new-tweet form is submitted intercept it
  $("#tweetTextForm").on('submit', function(e) {
    e.preventDefault();
    
    // check content validation
    let text = document.getElementById("tweetTextArea").value;
    if (text === "" || text.length > 140) {
      $('.warning').addClass('warningShow');
    } else {
      $('.warning').removeClass('warningShow'); 
      postTweet(this);
    }
  });

  renderTweets();  
});
