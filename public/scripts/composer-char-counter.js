function textCount(textArea) {
  let n = 140 - textArea.value.length;
  $('#counter').text(n);
  if (n < 0) $('#counter').css("color", "red");
  else $('#counter').css("color", "black");
}
