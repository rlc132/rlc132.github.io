$(document).ready(function() {
  //all js goes in here
  console.log("we loaded");


    $("#akira").mouseover(function () {
     $("#akira").css("font-size", "60px");
   })

   $("#cw").mouseover(function () {
    $("#cw").css("font-size", "60px");
  })

  $("#dbz").mouseover(function () {
   $("#dbz").css("font-size", "60px");
 })

 $("#king").mouseover(function () {
  $("#king").css("font-size", "60px");
})

$("#hitch").mouseover(function () {
 $("#hitch").css("font-size", "60px");
})

$("#supes").mouseover(function () {
$("#supes").css("font-size", "60px");
})

$("#x").mouseover(function () {
 $("#x").css("font-size", "60px");
})

$("#hobbit").mouseover(function () {
 $("#hobbit").css("font-size", "60px");
})

$("#rusty").mouseover(function () {
$("#rusty").css("font-size", "60px");
})

$("#intro")
  .mouseover(function() {
    // when your mouse is over a paragraph, the font size will become 21px
    $("#intro")
      .css("font-size", "35px");
  });

$("#intro")
  .mouseleave(function() {
    // when your mouse leaves a paragraph the font-size will get smaller
    // and the background-color of the paragraph will become yellow

    $("#intro")
      .css("font-size", "20px");
  });

     // When the user scrolls the page, execute myFunction
     window.onscroll = function() {myFunction()};

     // Get the header
     var header = document.getElementById("title");

     // Get the offset position of the navbar
     var sticky = header.offsetTop;

     // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
     function myFunction() {
       if (window.pageYOffset > sticky) {
         header.classList.add("sticky");
       } else {
         header.classList.remove("sticky");
       }
     }

});
