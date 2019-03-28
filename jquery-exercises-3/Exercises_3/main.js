//Check to see if script is linked properly.
console.log("This script is linked properly")


let count = 0;
let random = Math.floor(Math.random() * 100) + 1;

console.log(random);

$("#guess").click(function(){
    let input = Number($("#guesser").val())
    count ++;


    console.log
    

if (input === random) {
    $(".hint").html(input + " its CORRECT ");
    
    if (alert("You guessed in" + count + "times")) {
        
        
    } else {
        window.location.reload()
    }
    
} else if (input < random) {
    $(".hint").html(input + " You must go higher ");
} else {
    $(".hint").html(input + " You must go lower ");
    
}



});

$("#guesser").keypress(function (e) {
    let key = e.which;

    if (key == 13) {
        $("#guess").click();
        return false;
        
    }
    
});