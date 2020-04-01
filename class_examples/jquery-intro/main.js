$(document).ready(function() {
//all js goes in here
  console.log("we loaded");

$("#title").click(function() {
  // code that runs when you clock on the part of the page that has id title.
  // $("#title").css("color", "#f9423a");
  // $("#title").css("font-size", "500px");
  $("#title").addClass("big-text");
});

$("button2").click(function() {
  // stuff we put here will happen when you click button2.
$("#title").removeClass("big-text");
});

$("p").mouseover(function() {
  $("p").css("font-size", "21px");
});

$("p").mouseleave(function() {
  $("p").css("background-color", "yellow");
  $("p").css("font-size", "16px");
});
// $("#title").css("font-size", "500px");
// $("#title").html("More information #1");

});
