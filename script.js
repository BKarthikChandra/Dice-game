function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var x1 = randomNumber(1,7);
var x2 = randomNumber(1,7);

if(x1===1)
{
 document.getElementById("img1").src = "images/dice1.png";
}
else if(x1===2)
{
document.getElementById("img1").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice2.png";
}
else if(x1===3)
{
document.getElementById("img1").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice3.png";
}
else if(x1===4)
{
document.getElementById("img1").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice4.png";
}
else if(x1===5)
{
document.getElementById("img1").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice5.png";
}
else if(x1===6)
{
 document.getElementById("img1").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice6.png";
}
if(x2===1)
{
  document.getElementById("img2").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice1.png";
}
else if(x2===2)
{
    document.getElementById("img2").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice2.png";
}
else if(x2===3)
{
    document.getElementById("img2").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice3.png";
}
else if(x2===4)
{
     document.getElementById("img2").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice4.png";
}
else if(x2===5)
{
     document.getElementById("img2").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice5.png";
}
else if(x2===6)
{
     document.getElementById("img2").src = "file:///C:/Users/hp/OneDrive/Desktop/dice%20game/images/dice6.png";
}

if(x1>x2)
{
    document.querySelector("h1").innerHTML = "Player1 is Winner";
}
else if(x1<x2)
{
  document.querySelector("h1").innerHTML = "Player2 is Winner";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
