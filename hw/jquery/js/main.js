$(document).ready(function() {
  //all js goes in here
  console.log("we loaded");

$("title").mouseover( function() {
  // when your mouse is over a paragraph, the font size will become 21px
  $("p")
    .css("font-size", "21px");

$("#button1")
			.click( function() {
				// Code that runs when you click on the part of the page that has id="button1".
        // $("#show").click(function(){
        //  $("h2").show();
        // });
        $("p")
          .css("font-size", "21px")
			});

$("#button2")
			.click( function() {
				// stuff we put here will happen when you click button2.
        $("#hide").click(function(){
  $("h2").hide();
});
});

      $("p")
			.mouseover( function() {
				// when your mouse is over a paragraph, the font size will become 21px
				$("p")
					.css("font-size", "21px");
			});
      $("p")
      			.mouseleave( function() {
      				// when your mouse leaves a paragraph the font-size will get smaller
      				// and the background-color of the paragraph will become yellow
      				$("p")
      					.css("background-color", "yellow");
      				$("p")
      					.css("font-size", "16px");
      			});
            	});
