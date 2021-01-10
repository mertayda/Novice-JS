var p1button = document.getElementById("p1");
var p2button =document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay= document.querySelector("p span")
var p1Score = 0;
var p2Sccore=0;
var gameOver =false;
var winnigScore = 5;

p1button.addEventListener("click", function(){
    
    if(!gameOver){
        
        p1Score++;                
       
         if(p1Score===winnigScore)      
                                   {
        p1Display.classList.add("winner"); 
        gameOver=true;
        
                 
        } 
        p1Display.textContent = p1Score;
   
    }     

} );


p2button.addEventListener("click",function(){
                          
    if(!gameOver){
        
        p2Sccore++;
        if(p2Sccore===winnigScore){
            p2Display.classList.add("winner"); 
            gameOver=true;
        }
        
        
        
p2Display.textContent=p2Sccore;
        
        
    }             

                          
  });



resetButton.addEventListener("click",function(){

reset();


});


numInput.addEventListener("change",function(){

winningScoreDisplay.textContent=numInput.value;
winnigScore= Number(numInput.value);
reset();


});


function reset(){


    p1Score=0;
    p2Sccore=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver=false;
    



};