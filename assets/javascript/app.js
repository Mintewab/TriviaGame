
var Answers = new Array();

var timeLeft = 60;
var correctAnswers = 0;
var unansweredQuestions = 0;


var i = 0;


var t = "X";


var runrun;


function loseTime() {

    timeLeft--;

    document.getElementById("displayTimeLeft").innerHTML = timeLeft;

    if (timeLeft < 1) { gameOver(); }


}





