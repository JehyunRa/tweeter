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
  //(for unknown reason moment.js sometime calculate time 10 min ago instead of now)
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
            <p>${moment(tweet.created_at).fromNow()}</p>
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
  const escape =  function(form) {	
    const div = document.createElement('div');	
    div.appendChild(document.createTextNode(document.getElementById("tweetTextArea").value));
    document.getElementById("tweetTextArea").value = `<p>${div.innerHTML}<p>`;
    const data = $(form).serialize();
    document.getElementById("tweetTextArea").value = ""
    return data;
  }

  // POST the new-tweet to the server and call GET function
  function postTweet(form) {
    // reset textbox size
    $('#counter').text(140);
    $('#tweetTextArea').css("height", 31 + "px");

    const data = escape(form);
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
