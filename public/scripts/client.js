/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // calculate date for given data
  function pad2(number) {
    return (number < 10 ? '0' : '') + number
  }

  function numberToDate(num) {
    let seconds = num / 1000;
    let days = seconds / (60 * 60 * 24);
    seconds -= Math.floor(days) * (60 * 60 * 24);
    
    let year = 1970;
    let month = 1;
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let hour = 0;
    let minute = 0;
    
    while (days > 365) {
      if (year % 4 !== 0) {
        days -= 365;
        year += 1;
      } else {
        days -= 366;
        year += 1;
      }
    }
    
    for(let i = 0; i < 12; i++) {
      if (days >= daysInMonth[i]) {
        days -= daysInMonth[i];
        month += 1;
      } else break;
    }
    
    while (seconds > 60 * 60) {
      seconds -= 60 * 60;
      hour += 1;
    }

    while (seconds > 60) {
      seconds -= 60;
      minute += 1;
    }

    return `${year}/${month}/${Math.floor(days) + 1} ${pad2(hour)}:${pad2(minute)}`;
  }

  // create tweet container for each tweet
  function createTweetElements(tweet) {
    const markup = `
        <article class="center">
          <div class="wrapperNewTweet">
            <div class="tweetA"><img src=${tweet.user.avatars}></img></div>
            <div class="tweetB"><p>${tweet.user.name}</p></div>
            <div class="tweetB"><p class="floatRight hoverText">${tweet.user.handle}</p></div>
            <div class="clear"></div>
          </div>
          <div>
            <div>${tweet.content.text}</div>
          </div>
          <hr2/>
          <div>
            <span class="floatLeft">${numberToDate(tweet.created_at)}</span>
            <p class="floatRight">features</p>
            <div class="clear"></div>
          </div>
        </article>
      `;
    return markup;
  };
  
  // GET the database tweets and call createTweetElements on each of them and append result
  function renderTweets() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (tweets) {
      for (const tweet of tweets) {
        let markup = createTweetElements(tweet);
        $("#display-tweets").append(markup);
      }
    })
  };

  // POST the new-tweet to the server and call GET function
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

  // remove harmful inputs
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // when new-tweet form is submitted intercept it
  $("#tweetTextForm").on('submit', function(e) {
    e.preventDefault();
    $('#tweetTextArea').css("height", 31 + "px"); // reset textbox size
    let text = document.getElementById("tweetTextArea").value;
    
    // check content validation
    if (text === "" || text.length >= 140) {
      $('.warning').addClass('warningShow');
    } else {
      $('.warning').removeClass('warningShow'); 
      document.getElementById("tweetTextArea").value = `<p>${escape(text)}</p>`;
      postTweet(this);
    }
  });

  renderTweets();  
});
