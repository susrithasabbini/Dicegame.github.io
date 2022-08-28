var player = prompt("Enter number from 1 to 6: ");
var randomNumber1 = player; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if(randomNumber1 >= 1 && randomNumber1 <= 6) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Congratulations !! You won the game";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "You lost the game! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
else {
  alert("Error !! No such number on dice Please try again");
}