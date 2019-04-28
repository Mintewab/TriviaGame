
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




function gameLoad() {

    document.getElementById("startWrapper").style.display = "none";

    document.getElementById("gameWrapper").style.display = "block";



    runrun = setInterval(function () { loseTime(); }, 1000);


}

function gameOver() {

    clearInterval(runrun);
    document.getElementById("displayTimeLeft").innerHTML = "You Lose!";

    Answers = document.getElementsByTagName("input");


    if (Answers[0].checked == true) { correctAnswers++ }
    if (Answers[3].checked == true) { correctAnswers++ }
    if (Answers[7].checked == true) { correctAnswers++ }
    if (Answers[9].checked == true) { correctAnswers++ }
     if (Answers[14].checked == true) { correctAnswers++ } 
     if (Answers[16].checked==true){correctAnswers++}
     if (Answers[18].checked==true){correctAnswers++}
     if (Answers[22].checked==true){correctAnswers++}
     if (Answers[25].checked==true){correctAnswers++}
     if (Answers[29].checked==true){correctAnswers++}





