//jquery
//1. (play the game) dynamically append data (jquery) 05:11
//onclick
//2. timer: timer app from tutor
//3. local storage: 04: pgm 26
//questions ans choices // we need to check when it is over
//object and arrays (prebuilt .length): which one to choose
var index=1;
var game={
    question:["question1","question2"],
    choices:
    [
        ['a','b','c'],
        ["true","false"],

    ],
    answers:['a',"false"]
}

function displayQuestions(){
    //question
    console.log(game.question[index])
    //choices
 
    for(var i=0;i<game.choices[index].length;i++){
    console.log(game.choices[index][i])
    console.log(game.answers[index])
}
    //wrong or right
}
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

function start(){
    //title
    //diplay time
    //display highscore link (later)
    //instruction
    //startbtn

}

//onclick for the startbtn
//calls displayQuestion()
//start time




function gameOver(){
    //say game over
    //score
    //enter name
    //btn
}

//once they hit the submit (onlick)
//display all the users with score
//option to go back (start() or clear local straoge)

displayQuestions();