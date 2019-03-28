// Write your solution here

/*Exercise 5

When the user focuses on a field, set its edge to "1px solid green". When the field is no longer sharp, set the border to "1px solid red".*/


$("#name").focusin(function(){
    $(this).css("border",  "5px solid green");
  });

$("#name").focusout(function(){
    $(this).css("border",  "5px solid red");
  });




$("#first_name").focusin(function(){
    $(this).css("border",  "5px solid green");
  });

$("#first_name").focusout(function(){
    $(this).css("border",  "5px solid red");
  });
  