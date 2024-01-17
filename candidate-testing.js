const input = require('readline-sync'); // Since we are requiring user input throughout the quiz, it is necessary to import the readline-sync library, enabling us to prompt for and accept user input in the command line. 

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""; //the variable, 'candidateName' has been initialized to an empty string
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "; // Initializes the question variable to a string containing the quiz question
let correctAnswer = "Sally Ride"; // correctAnswer variable has been initialized to store the value for the correct answer to the question variable
let candidateAnswer = ""; //A variable containing an empty string has been initialized to store the user's answer


//TODO: Variables for Part 2  
//Here I will be initializing each of these variables to store multiple questions and multiple correct answers, as well as multiple user input responses to each question
let questions; 
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name
  // This code block defines a function to prompt the user for their name (input) and store the received value in candidateName
  candidateName = input.question("What is your first and last name? " );
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
  // this code block defines the askQuestion function which will prompt the user for an answer to the quiz question and store it in candidateAnswer
  candidateAnswer = input.question(question + " ");
 // console.log("You entered: " + candidateAnswer); to check myself here

}

function gradeQuiz(candidateAnswers) { 

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly 
  // defines the gradeQuiz function which checks to see if a candidate's answer was correct, and then scores the answer with a 1 if it was correct or a 0 for incorrect
  if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("Your answer is correct!");
    grade = 1; // assigning a score of 1 for a correct answer
  } else {
    console.log("Sorry, your answer is incorrect.");
    grade = 0; //assign a score of 0 for an incorrect answer
  }

  return grade; //trying moving this here to see if it solves my issue
}


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


 // return grade; 


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

runProgram();