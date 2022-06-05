var number = Math.floor(Math.random()*6)+1;
var randomdice = "images/dice "+number+ ".png";
var image = document.querySelectorAll("img")[1].setAttribute("src",randomdice);
var number2 = Math.floor(Math.random()*6)+1;
var randomdice2 = "images/dice "+number2+ ".png";
var image2 = document.querySelectorAll(".diceimg img ")[0].setAttribute("src",randomdice2);


if(number2>number){
    document.querySelector("p").innerHTML = "Player 1 Wins";
}
else if (number>number2){
    document.querySelector("p").innerHTML= "Player 2 Wins";
}
else{
    document.querySelector("p").innerHTML = "Draw";
}
function myfunc(){
    location.reload();
}