
 const name1 = prompt("Enter the name of the player 1")
 const name2 = prompt("Enter the name of the player 2")
document.getElementById("p1").innerHTML=name1;
document.getElementById("p2").innerHTML=name2;

 document.getElementById("btn").onclick = function() {
   
  var randomNumber1=Math.floor(Math.random()*6 +1); //1-6
var randomNumber2=Math.floor(Math.random()*6 +1)  //1-6
var randomDiceImage1 = "dice" + randomNumber1 + ".png";  //dice1.png  - dice6.png
var randomImgsource1 = "images/" + randomDiceImage1;  //imag//dice1 - img/dice-6.png

var randomDiceImage2 = "dice" + randomNumber2 + ".png";  //dice1.png  - dice6.png
var randomImgsource2 = "images/" + randomDiceImage2;  //imag//dice1 - img/dice-6.png

 var img1=document.querySelectorAll("img")[0];
 var img2=document.querySelectorAll("img")[1];

 img1.setAttribute("src",randomImgsource1);
 img2.setAttribute("src",randomImgsource2);



if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = `👇 ${name1} Wins!`;
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML=`${name2} Wins! 👇`;
}
else
{
  document.querySelector("h1").innerHTML="It's Draw!";
}

}


