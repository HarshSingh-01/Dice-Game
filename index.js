var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var randomImageSource2 = "images/" + randomDiceImage2;

document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", randomImageSource1);
document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.getElementsByTagName("h1")[0].innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player2 Wins!🚩";
} else {
  document.getElementsByTagName("h1")[0].innerHTML = "Draw🙂";
}

document.getElementsByTagName("h1")[0].style.fontSize = "6rem";
