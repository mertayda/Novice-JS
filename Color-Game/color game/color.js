var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messengerDisplay = document.querySelector("#messenger");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons  =document.querySelectorAll(".mode");


for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
		reset();
	});
}


function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messengerDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}


//  For BTN, still works but unnecessary.
 /* easyBTN.addEventListener("click",function(){
 hardBTN.classList.remove("selected");
  easyBTN.classList.add("selected");
    numSquares=3;
    colors = generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i = 0; i<squares.length; i++){
        
    if(colors[i]) {
       
      squares[i].style.backgroundColor=colors[i];
       
       }   
        
    else {
        
        squares[i].style.display="none";
    }
    
    
} } )

hardBTN.addEventListener("click",function(){
    
     easyBTN.classList.remove("selected");
     hardBTN.classList.add("selected");
    
      numSquares=6
    colors = generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i = 0; i<squares.length; i++){
   squares[i].style.backgroundColor=colors[i];
  squares[i].style.display="block";
    } })*/


resetButton.addEventListener("click", function(){
                       
      //generate all new colors
      
         colors = generateRandomColors(numSquares);
         // pick a new random color from array
           pickedColor = pickColor();
         // change colorDisplay to match picked color
         colorDisplay.textContent =  pickedColor ;    
    this.textContent="New Colors";
    messengerDisplay.textContent = "";
        //change colors of squres
        for(var i =0; i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
   }
        h1.style.backgroundColor="steelblue";

})

colorDisplay.textContent = pickedColor;


for(var i=0;i<squares.length;i++ ){
// add initial colors to squares
squares[i].style.backgroundColor = colors[i];

// add  click listeners to squares
squares[i].addEventListener("click",function(){

// grap color of clicked color
var clickedColor = this.style.backgroundColor;
// compare color to pickedColor
if(clickedColor===pickedColor){
    messengerDisplay.textContent="Correct!";
    resetButton.textContent="Play again";
    h1.style.backgroundColor=clickedColor;
   changeColors(clickedColor);


}else {

    this.style.backgroundColor = "#232323";
   messengerDisplay.textContent="try again";
}
});
}

function changeColors(color){
    
for(var i =0; i<squares.length;i++){
    
   squares[i].style.backgroundColor=color; 
    
    
} }

function pickColor(){
    
 var random = Math.floor(Math.random()*colors.length);
    return colors[random];
    
}

function generateRandomColors(num){
    
    // make an empty array
    var arr = []
    
    for(var i =0; i<num; i++){
     // get random color and push to arr
    arr.push(randomColor()) ;
        
        
    }
    // return that arry
    return arr;
    
}

function  randomColor(){
    
  //pick a "red"  from 0   -  255
    
  var r =  Math.floor( Math.random()*256);
    
// pick a "green" from 0  -  255
    
    var g =Math.floor(Math.random()*256);
    
    // pick a "blue" from 0  - 255     
    
    var b= Math.floor(Math.random()*256);
    
 return "rgb(" + r + ", " + g + ", " + b + ")";
    
}



