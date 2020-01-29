/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  function createTweetElements(tweet) {
    const markup = `
        <article class="center">
          <div class="wrapper">
            <div class="a"><img src=${tweet.user.avatars}></img></div>
            <div class="b"><p>${tweet.user.name}</p></div>
            <div class="c"><p class="floatRight hoverText">${tweet.user.handle}</p></div>
          </div>
          <div>
            <div>${tweet.content.text}</div>
          </div>
          <hr2/>
          <div>
            <span class="floatLeft">${tweet.created_at}</span>
            <p class="floatRight">features</p>
            <div class="clear"></div>
          </div>
        </article>
      `;
    return markup;
  };
  
  function renderTweets() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (tweets) {
      for (const tweet of tweets) {
        let markup = createTweetElements(tweet);
        $("#display-tweets").append(markup);
      }
    })
  };

  function postTweet(form) {
    let data = $(form).serialize();
    document.getElementById("tweetTextArea").value = ""
    $.ajax({
      url: '/tweets',
      data,
      method: "POST"
    }).then(() => {
      $("#display-tweets").empty();
      renderTweets();
    })
  };

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  $("#tweetTextForm").on('submit', function(e) {
    e.preventDefault();
    let text = document.getElementById("tweetTextArea").value;
    if (text === "" || text.length >= 140) alert('unacceptable tweet input');
    else {
      document.getElementById("tweetTextArea").value = `<p>${escape(text)}</p>`;
      postTweet(this);
    }
  });

  renderTweets();  
});
