// Write your solution here

/*Exercise 6

When the mouse moves over a colored button, color the text. The text must turn black again when the mouse leaves the button.*/


/*$("#green").hover(function(){
    $("#text").css("color",  "green");
  });

  $("#green").mouseout(function(){
    $("#text").css("color", "black");
});*/


$("#green").hover(function(){
  // over
  $("#text").css("color",  "green");
  
}, function () {
  // out
  $("#text").css("color", "black");
}
);

$("#red").hover(function(){
  // over
  $("#text").css("color",  "red");
  
}, function () {
  // out
  $("#text").css("color", "black");
}
);

$("#blue").hover(function(){
  // over
  $("#text").css("color",  "blue");
  
}, function () {
  // out
  $("#text").css("color", "black");
}
);
  