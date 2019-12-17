var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayPickedColor= document.querySelector("#displayColor");
displayPickedColor.textContent = pickedColor;
var message = document.querySelector("#tryDisplay");
var h1 = document.querySelector("h1");
var btnResetColors = document.querySelector("#resetbtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//generate the right color
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

for(var i = 0; i < squares.length; i++){
    //set initial colors
    squares[i].style.backgroundColor = colors[i];
    //check
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor

        if (clickedColor === pickedColor){
            message.textContent = "Correct";
            btnResetColors.textContent="Play Again"
            h1.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
        }
        else{
           this.style.backgroundColor = "#232323";  
           message.textContent = "Try again";

        }
    });}

// function to change all square colors

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color
    }
}


// funtion to generate random colors
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //red from 0-255
    var r = Math.floor(Math.random() * 256);
    //green from 0-255
    var g = Math.floor(Math.random() * 256);
    //blue from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
// reset the colors

btnResetColors.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    displayPickedColor.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
this.textContent= "New colors"
});    

//changing to easy mode
easyBtn.addEventListener("click",function(){
    h1.style.backgroundColor = "steelblue";
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    //generating 3 new colors
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    displayPickedColor.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
    } else{
        squares[i].style.display = "none";
    }
}});

//changing hard btn color when selected
hardBtn.addEventListener("click",function(){
    h1.style.backgroundColor = "steelblue";
    numSquares = 6;
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    //generating 6 new colors 
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    displayPickedColor.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});