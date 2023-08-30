
// Dice 1

var b=Math.floor(6*Math.random()+1);
var a="images/dice"+b+".png";

document.querySelector(".img1").setAttribute("src",a);

// Dice 2

var b1=Math.floor(6*Math.random()+1);
var a1="images/dice"+b1+".png";

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
