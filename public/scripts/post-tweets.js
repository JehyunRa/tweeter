function postTweet(form) {
  event.preventDefault();
  let a = $(form).serialize();
  $.ajax({
    url: "test.html",
    context: a,
    method: "POST"
  })
};

function formValidation() {
  event.preventDefault();
  let check = (document.getElementById("tweetTextArea")).value;
  if (check === "" || check.length >= 140) alert('unacceptable tweet input');
  else {
    alert('pass');
    postTweet(check);
  }
};
