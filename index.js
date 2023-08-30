// Players names....
// var player1=prompt("Enter name of player 1 : ");
// var player2=prompt("Enter name of player 2 : ");
// document.querySelector(".p1").innerHtml=prompt(player1);
// document.querySelector(".p2").innerHtml=prompt(player2);
// Dice 1

var b=Math.floor(6*Math.random()+1);
var a="images/dice"+b+".png";
// if((b==1)) {
//   a="images/dice1.png";
// }
// else if((b==2)) {
//   a="images/dice2.png";
// }
// else if((b==3)) {
//   a="images/dice3.png";
// }
// else if((b==4)) {
//   a="images/dice4.png";
// }
// else if((b==5)) {
//   a="images/dice5.png";
// }
// else {
//   a="images/dice6.png";
// }
document.querySelector(".img1").setAttribute("src",a);

// Dice 2

var b1=Math.floor(6*Math.random()+1);
var a1="images/dice"+b1+".png";
// if((b1==1)) {
//   a1="images/dice1.png";
// }
// else if((b1==2)) {
//   a1="images/dice2.png";
// }
// else if((b1==3)) {
//   a1="images/dice3.png";
// }
// else if((b1==4)) {
//   a1="images/dice4.png";
// }
// else if((b1==5)) {
//   a1="images/dice5.png";
// }
// else {
//   a1="images/dice6.png";
// }
document.querySelector(".img2").setAttribute("src",a1);

//Heading
if(b>b1){
  document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else if(b1>b){
  document.querySelector("h1").textContent="Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").textContent="Draw!";
}
