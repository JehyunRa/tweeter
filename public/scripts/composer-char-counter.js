$(document).ready(function() {

  $("#tweetTextArea").on('keyup', function() {
    this.style.height = 31 + "px";
    this.style.height = this.scrollHeight + "px";
    
    let n = 140 - this.value.length;
    $('#counter').text(n);
    if (n < 0) $('#counter').css("color", "red");
    else $('#counter').css("color", "black");
  });

});
