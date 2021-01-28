//  click the start button: 
    //timer starts 
    //presented with a question and choices
    //display timer
    //LATER: view high scorearea

// when user clicks on answer :
    //displays wrong or right
    //go to next question
    //index++;
//question incorrectly
    //:  time is subtracted from the clock (reduce 15s)
//game over:
//timer hits 0
//OR no more ans

// WHEN the game is over:
//:save  initials and  score
//see high score or //LATER clear highscore

var currentQuestionIndex = 0;
var time = questions.length * 20;
var timeId;

var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#StartButton");
var submitBtn = document.querySelector("#submit-button");
var titleScreen = document.querySelector("#title-section");
var quizScreen = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#highscore-section");
var highScoreDisplay = document.querySelector("#highscore-display");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");

var questions = [
    {
        title: "Which of the following is true about variable naming conventions in JavaScript?"
        
        choices: [" A: You should not use any of the JavaScript reserved keyword as variable name", 
        "B:JavaScript variable names should not start with a numeral (0-90)",
        "C:Both of the above", "D:None of the above."],
        
        answer: "Both of the above"

    }, 
    {
        title: "Which of the following is the correct syntax to redirect a url using JavaScript?"
       
        choices: [ "A:document.location='http://www.newlocation.com';",

        "B:browser.location='http://www.newlocation.com';",
        
        "C:navigator.location='http://www.newlocation.com';",
        
        "D:window.location='http://www.newlocation.com';"]
       
        answer: "window.location='http://www.newlocation.com';"

    }, 
    {
        title: "Which built-in method returns the length of the string?"
       
        choices: ["A:length()", "B:size()", "C:index()", "D:None of the above."]
       
        answer: "length()"

    }, 
    {
        title: "Which built-in method returns the characters in a string beginning at the specified location?"
        
        choices: ["A:substr()","B:getSubstring()", "C:slice()", "D:None of the above."]
        
        answer: "substr()"

    }, 
    {
        title: "Which of the following function of Boolean object returns a string containing the source of the Boolean object?"
        
        choices: ["A:toSource()", "B:valueOf()", "C:toString()", "D: None of the above."]
        
        answer: "toSource()"

    }, 


]


function startQuiz() {
    titleScreen.setAttribute("class", "hide");

    quizScreen.setAttribute("class", "show");

    timeId = setInterval(tick, 1000);

    timeEl.textContent = time;

    getQuestion();

}

function tick() {
    time--;

    timeEl.textContent = time;

    if (time<= 0) {
        quizEnd();
    }
}

function getQuestion() {

    var currentQuestion = questions[currentQuestionIndex];
    
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";

    currentQuestion.choices. forEach(function(choose, i) {
        
        var choiceNode = document.createElement("button");

        choiceNode.setAttribute("class", "choice");

        choiceNode.setAttribute("value", choose);

        choiceNode.onclick = questionClick;

        choicesEl.appendChild(choiceNode);

    });
}

function questionClick() {

    if (this.value !==questions[currentQuestionIndex].answers) {

        time-= 20;

        if (time < 0) {
            time = 0;
        }

        timeEl.textContent = time;

        feedbackEl.textContent = "wrong!";
    } else {
        feedbackEl.textContent = "Correct!";
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000); 

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        
        quizEnd();

    } else {

        getQuestion();
    }
}

function quizEnd() {

    clearInterval(timeId);

    var highscoreSectionEl = document.querySelector("#highscore-section");
    
    highscoreSectionEl.setAttribute("class", "show");

    var finalScoreEl = document.querySelector("#final-score");

    finalScoreEl.textContent = time;

    quizScreen.setAttribute("class", "hide");
}

function saveHighscore() {
    
    var initials = initialsEl.value.trim();

    if (initials !=="") {
        var highscore = JSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {

            score: time,

            initials: initials
        };

        highscore.push(newScore);

        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        window.localStorage.href = "Score.html";

    } 
}

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
    }
}

submitBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;






//1. (play the game) dynamically append data 
//onclick
//2. timer: timer app from tutor
//3. local storage: 04: pgm 26
//questions ans choices // we need to check when it is over
//object and arrays (prebuilt .length): which one to choose
// var index=1;
// var game={
//     question:["question1","question2"],
//     choices:
//     [
//         ['a','b','c'],
//         ["true","false"],

//     ],
//     answers:['a',"false"]
// }

// function displayQuestions(){
//     //question
//     console.log(game.question[index])
//     //choices
 
//     for(var i=0;i<game.choices[index].length;i++){
//     console.log(game.choices[index][i])
//     console.log(game.answers[index])
// }
//     //wrong or right
// }




// function start(){
//     //title
//     //diplay time
//     //display highscore link (later)
//     //instruction
//     //startbtn

// }

// //onclick for the startbtn
// //calls displayQuestion()
// //start time




// function gameOver(){
//     //say game over
//     //score
//     //enter name
//     //btn
// }

// //once they hit the submit (onlick)
// //display all the users with score
// //option to go back (start() or clear local straoge)

// displayQuestions();