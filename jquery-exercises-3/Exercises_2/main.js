// Write your solution here

let count = 0;

$("#plus").click(function() {
    count++;
    $("#counter").html("Your current count is: "+ count);
});

$("#min").click(function() {
    count--;
    $("#counter").html("Your current count is: "+ count);
});