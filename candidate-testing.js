const input = require('readline-sync'); // Since we are requiring user input thr
// TODO 1.1a: Define candidateName // 
let candidateName = ""; //the variable, 'candidateName' has been initialized to an empty string
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "; // Initializes the question variable to a string containing the quiz question
let correctAnswer = "Sally Ride"; // correctAnswer variable has been initialized to store the value for the correct answer to the question variable
let candidateAnswer = ""; //A variable containing an empty string has been initialized to store the user's answer

//TODO: Variables for Part 2  
//Here I will be initializing each of these variables to store multiple questions and multiple correct answers, as well as multiple user input responses to each question
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometers = 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? " 
]; 
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];
function askForName() {
  // TODO 1.1b: Ask for candidate's name
  // This code block defines a function to prompt the user for their name (input) and store the received value in candidateName
  candidateName = input.question("What is your first and last name? " );
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
  // this code block defines the askQuestion function which will prompt the user for an answer to the quiz question and store it in candidateAnswer
 // candidateAnswer = input.question(question + " ");
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }
  // console.log("You entered: " + candidateAnswer); to check myself here
}
function gradeQuiz(candidateAnswers) {
  let totalCorrect = 0; //Initialize a variable to count correct answers input by user

  for (let i = 0; i < questions.length; i++) {
    console.log(`\n${i + 1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
    // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly 
    // defines the gradeQuiz function which checks to see if a candidate's answer was correct, and then scores the answer with a 1 if it was correct or a 0 for incorrect
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log("Your answer is correct!");
      totalCorrect++;
      // grade = 1; // assigning a score of 1 for a correct answer
    } else {
      console.log("Sorry, your answer is incorrect.");
      // grade = 0; //assign a score of 0 for an incorrect answer
    }
  //  return grade; //trying moving this here to see if it solves my issue
  }
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  grade = (totalCorrect / questions.length) * 100; //this line calculates the percentage of correct candidate answers they've input
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(candidateAnswers);
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