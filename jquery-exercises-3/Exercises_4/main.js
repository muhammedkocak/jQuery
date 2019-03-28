// Write your solution here



$("#b1").on("click",function(){

    if( $("#rect").height() < 100){
       $("#rect").height("+=10");
   }

     else {
         $("#rect").height("10");
        
    }
    
});




$("#b2").click(function(){
    $("#rect").css("backgroundColor" , "green");

});

$("#b3").click(function(){
    $("#rect").css("backgroundColor" , "");

});


$("#b4").click(function(){
    $("#rect").hide();

});

$("#b5").click(function(){
    $("#rect").show();

});






