// Write your solution here

let count = 0;

$("#click-me").click(function() {
    count++;
    $("#counter").html("Your current count is: "+ count);
});