/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// $(document).ready(function() {
//   --- to be implemented ---
// });

function createTweetElements(tweet) {
  const markup = `
      <article class="center">
        <div>
          <p class="floatLeft">${tweet.user.name}</p>
          <p class="floatRight hoverText">${tweet.user.handle}</p>
          <div class="clear"></div>
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

renderTweets();
