const box1 = document.getElementById("box-element-1");
const box2 = document.getElementById("box-element-2");
const box3 = document.getElementById("box-element-3");
const box4 = document.getElementById("box-element-4");
const box5 = document.getElementById("box-element-5");
const box6 = document.getElementById("box-element-6");
const box7 = document.getElementById("box-element-7");
const box8 = document.getElementById("box-element-8");
const box9 = document.getElementById("box-element-9");
const playButton = document.getElementById("game-button");
const resetButton = document.getElementById("reset-button");
box1.style.backgroundColor = "white";
box2.style.backgroundColor = "white";
box3.style.backgroundColor = "white";
box4.style.backgroundColor = "white";
box5.style.backgroundColor = "white";
box6.style.backgroundColor = "white";
box7.style.backgroundColor = "white";
box8.style.backgroundColor = "white";
box9.style.backgroundColor = "white";
const winnerSign = document.getElementById("winner-sign");
winnerSign.style.opacity = 0;
const loserSign = document.getElementById("loser-sign");
loserSign.style.opacity = 0;
const gameBox = document.getElementById("game-box");
gameBox.style.opacity = 1;

function randomBox() {
 let result = Math.random() * 100;
 if (counts >= 5) {
  playButton.disabled = true;
 }
 let chosenBox;
 if (result <= 11) {
  chosenBox = box1;
 } else if (result <= 22) {
  chosenBox = box2;
 } else if (result <= 33) {
  chosenBox = box3;
 } else if (result <= 44) {
  chosenBox = box4;
 } else if (result <= 55) {
  chosenBox = box5;
 } else if (result <= 66) {
  chosenBox = box6;
 } else if (result <= 77) {
  chosenBox = box7;
 } else if (result <= 88) {
  chosenBox = box8;
 } else {
  chosenBox = box9;
 }
 // console.log(chosenBox.style.backgroundColor);
 
 if (chosenBox.style.backgroundColor === "white") {
  chosenBox.style.backgroundColor = "grey";
 } else {
  chosenBox.style.backgroundColor = "black";
  gameBox.style.opacity = 0.7;
  winnerSign.style.opacity = 1;
  playButton.disabled = true;
 }

 if (box1.style.backgroundColor !== "black" &&
 box2.style.backgroundColor !== "black" &&
 box3.style.backgroundColor !== "black" &&
 box4.style.backgroundColor !== "black" &&
 box5.style.backgroundColor !== "black" &&
 box6.style.backgroundColor !== "black" &&
 box7.style.backgroundColor !== "black" &&
 box8.style.backgroundColor !== "black" &&
 box9.style.backgroundColor !== "black" && counts === 5) {
 gameBox.style.opacity = 0.7;
 loserSign.style.opacity = 1;
 }
}

function resetCounts() {
 counts = 0;
 playButton.disabled = false;
}

function resetColor() {
 box1.style.backgroundColor = "white";
 box2.style.backgroundColor = "white";
 box3.style.backgroundColor = "white";
 box4.style.backgroundColor = "white";
 box5.style.backgroundColor = "white";
 box6.style.backgroundColor = "white";
 box7.style.backgroundColor = "white";
 box8.style.backgroundColor = "white";
 box9.style.backgroundColor = "white";
 winnerSign.style.opacity = 0;
 loserSign.style.opacity = 0;
 gameBox.style.opacity = 1;
}


let counts = 0;
playButton.onclick = function() {
 counts++;
}


playButton.addEventListener("click", randomBox);
resetButton.onclick = resetCounts;
resetButton.addEventListener("click", resetColor);
