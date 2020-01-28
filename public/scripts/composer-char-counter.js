$(document).ready(function() {
  console.log('hello');
})

function textCount(textArea) {
  let n = 140 - textArea.value.length;
  $('#counter').text(n);
  if (n < 0) $('#counter').css("color", "red");
  else $('#counter').css("color", "black");
}

// function countChar(val) {
//   var len = val.value.length;
//   if (len >= 500) {
//     val.value = val.value.substring(0, 500);
//   } else {
//     $('#charNum').text(500 - len);
//   }
// }