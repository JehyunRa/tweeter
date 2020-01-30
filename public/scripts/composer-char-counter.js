$(document).ready(function() {

  // increase textbox height when typing more than one line in new-tweet
  $("#tweetTextArea").on('keyup', function() {
    this.style.height = 31 + "px";
    this.style.height = this.scrollHeight + "px";
    
    // turn letter count color when it goes over or under 140
    let n = 140 - this.value.length;
    $('#counter').text(n);
    if (n < 0) $('#counter').css("color", "red");
    else $('#counter').css("color", "black");
  });

});
