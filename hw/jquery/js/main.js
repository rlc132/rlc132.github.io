$(document).ready(function() {
  //all js goes in here
  console.log("we loaded");

  $("#title").css("color", "#bada55");
  $("#title").html("How to Make a Medianoche Cuban Sandwich");

  $("#button1")
  .click(function() {
  $("#title").click(function()
    // code that runs when you clock on the part of the page that has id title.
    // $("#title").css("color", "#f9423a");
    // $("#title").css("font-size", "500px");
    $("#title").addClass("big-text");
    console.log("this ran");
  });

  $("button2").click(function() {
    // stuff we put here will happen when you click button2.
  $("#title").removeClass("big-text");
  });

  $("#box").mousedown(function() {
    $("#box").css("background-color", "green");

    $("#finishedpic").mouseover(function(){
      $("body").css("background-color", "#B0BF1A");
  });



  // $("p").mouseover(function() {
  //   $("p").css("font-size", "21px");
  // });




  //   $("p").css("background-color", "yellow");
  //   $("p").css("font-size", "16px");
  // });
  // $("#title").css("font-size", "500px");
  // $("#title").html("More information #1");


});
