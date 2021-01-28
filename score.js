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




var startQuizEl = document.querySelector("#start-quiz");
var introEl = document.querySelector("#intro");
var containerEl = document.querySelector(".container");
var countdownEl = document.querySelector("#countdown");
var quizQuestionnaireEl = document.querySelector("#quiz-questionnaire");
var navigateToResultsPageEL = document.querySelector("#navigate_to_result");
var submitButtonEl = document.querySelector("#submitbtn");
var initialContainer = document.querySelector("#initial");
var formEl = document.querySelector("form");

var score = 0;
var seconds = 75;
var result = "";
var userInitial = "";

var questions = [
  {
    title: "What is the HTML tag under which one can write the JavaScript code?",
    choices: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js> "],
    answer: "C) <script>"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
    choices: ["A. alertbox(“GeeksforGeeks”);", "B. msg(“GeeksforGeeks”);", "C. msgbox(“GeeksforGeeks”);",
      "D. alert(“GeeksforGeeks”);"],
    answer: "D. alert(“GeeksforGeeks”);"
  },
  {
    title: "Which of the following is not a reserved word in JavaScript?",
    choices: ["A. interface", "B. throws", "C. program", "D. short"],
    answer: "C. program"
  },
  {
    title: "The external JavaScript file must contain <script> tag. True or False?",
    choices: ["A. True", "B. False"],
    answer: "B. False"
  }
];


if (startQuizEl) {
startQuizEl.addEventListener("click", function(event) {
  event.preventDefault();
  introEl.setAttribute("class", "hide");
  countdownTimer();
 
  var i = 0;
  displayQuestionAtIndex(i);
  var choiceList = document.querySelector("ol");
  choiceList.addEventListener("click", function(event) {
    event.preventDefault;
    var userSelection = event.target.innerText;
    var correctAnswer = questions[i]["answer"];
    result = displayResultforIndividualQuestion(userSelection, correctAnswer);
    result ? seconds : seconds = seconds - 10 
    
    i++;
    displayQuestionAtIndex(i);
    var choiceList = document.querySelector("ol");
    choiceList.addEventListener("click", function(event) {
      event.preventDefault;
      var userSelection = event.target.innerText;
      var correctAnswer = questions[i]["answer"];
      result = displayResultforIndividualQuestion(userSelection, correctAnswer);
      result ? seconds : seconds = seconds - 10      

      i++;
      displayQuestionAtIndex(i);
      var choiceList = document.querySelector("ol");
      choiceList.addEventListener("click", function(event) {
        event.preventDefault;
        var userSelection = event.target.innerText;
        var correctAnswer = questions[i]["answer"];
        result = displayResultforIndividualQuestion(userSelection, correctAnswer);
        result ? seconds : seconds = seconds - 10

        i++;
        displayQuestionAtIndex(i);
        var choiceList = document.querySelector("ol");
        choiceList.addEventListener("click", function(event) {
          event.preventDefault;
          var userSelection = event.target.innerText;
          var correctAnswer = questions[i]["answer"];
          result = displayResultforIndividualQuestion(userSelection, correctAnswer);
          result ? seconds : seconds = seconds - 10

          i++;
          displayQuestionAtIndex(i);
          var choiceList = document.querySelector("ol");
          choiceList.addEventListener("click", function(event) {
            event.preventDefault;
            var userSelection = event.target.innerText;
            var correctAnswer = questions[i]["answer"];
            result = displayResultforIndividualQuestion(userSelection, correctAnswer);
            result ? seconds : seconds = seconds - 10
            $("#quiz-questionnaire").empty();
            displayResult();
          });  
          
        });  
          
      });

    });     
 
  });
  
});
}


function submitFunc(){
  submitButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    userInitial = initialContainer.value;
    console.log(userInitial);
    window.location.href = "highscores.html";
    var userScoreCard = {
      "user-initial": userInitial,
      "user-score": score
    }
    localStorage.setItem("user-score-card", JSON.stringify(userScoreCard));  
  });
}

function countdownTimer() {
  countdownEl.textContent = seconds;  
  var countdown = setInterval(function() {
    seconds--;
    countdownEl.textContent = seconds;
    i = 0;
    if (seconds <= 0) {
      clearInterval(countdown);
      countdownEl.textContent = "";
      $("#quiz-questionnaire").empty();
      displayResult();
    }
  }, 1000);
}


function displayQuestionAtIndex(i) {
  $("#quiz-questionnaire").empty();
  var divEl = document.createElement("div");
  divEl.textContent = questions[i]["title"];
  quizQuestionnaireEl.appendChild(divEl);
  divEl.setAttribute("class", "question");
  var questionDivEl = document.querySelector(".question");
  var olEl = document.createElement("ol");
  questionDivEl.appendChild(olEl);
  olEl.setAttribute("class", "choices");
  var choicesOl = document.querySelector(".choices");
  var li1El = document.createElement("li")
  var li2El = document.createElement("li")
  var li3El = document.createElement("li")
  var li4El = document.createElement("li")  
  li1El.textContent = questions[i]["choices"][0];
  choicesOl.appendChild(li1El);
  li1El.setAttribute("class", "choice-item");  
  li2El.textContent = questions[i]["choices"][1];
  choicesOl.appendChild(li2El);
  li2El.setAttribute("class", "choice-item");    
  li3El.textContent = questions[i]["choices"][2];
  choicesOl.appendChild(li3El);
  li3El.setAttribute("class", "choice-item");
  li4El.textContent = questions[i]["choices"][3];
  choicesOl.appendChild(li4El);
  li4El.setAttribute("class", "choice-item");  
}


function displayResultforIndividualQuestion(userPick, correctAnswer) {
  divClassEl = document.querySelector(".question");
  divClassEl.appendChild(document.createElement("hr"));
  var divEl = document.createElement("div");   
  if (userPick === correctAnswer) { 
    score++;              
    divEl.textContent = "Correct!";
    divClassEl.appendChild(divEl); 
    return true;    
  }
  else {
    divEl.textContent = "Wrong!";
    divClassEl.appendChild(divEl);
    return false;   
  }
}


function displayResult() {
  resultDiv = document.querySelector("#display-result");
  resultDiv.removeAttribute("class", "hide");
  seconds = 0;
  scoreEl = document.querySelector("#test-score");
  scoreEl.textContent = score + " / 5"; 
  submitFunc();
}