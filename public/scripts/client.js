/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function textAreaAdjust(textArea) {
  textArea.style.height = "0px";
  textArea.style.height = (3 + textArea.scrollHeight)+"px";
}
