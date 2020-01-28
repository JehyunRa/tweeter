function postTweet(form) {
  event.preventDefault();
  let a = "empty";
  a = $(form).serialize();
  console.log(a);
}