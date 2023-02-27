import React, { useState } from "react";
import './styles/Quiz.css'

function Quiz() {

  const questions = [
    {
      question: "Care este cea mai mare contribuție la formarea industriei în județul Vâlcea?",
      options: [
        "Comerţ",
        "Administraţia publică",
        "Construcţiile",
        "Agricultura"
      ],
      answer: "Comerţ"
    },
    {
      question: "Ce sport practica Michael Jordan?",
      options: [
        "Tenis",
        "Fotbal",
        "Golf",
        "Baschet"
      ],
      answer: "Baschet"
    }
  ];
  
  let remainingQuestions = [...questions];
  let score = 0;
  let streak = 0;
  
  function getRandomQuestion() {
    if (remainingQuestions.length === 0) {
      return;
    }
    let currentQuestionIndex = Math.floor(Math.random() * remainingQuestions.length);
    return remainingQuestions.splice(currentQuestionIndex, 1)[0];
  }
  
  function scrambleOptions(options) {
    let scrambledOptions = [...options];
    for (let i = scrambledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [scrambledOptions[i], scrambledOptions[j]] = [scrambledOptions[j], scrambledOptions[i]];
    }
    return scrambledOptions;
  }
  
  function displayQuestion() {
    let currentQuestion = getRandomQuestion();
    if (!currentQuestion) {
      endQuiz();
      return;
    }
    document.getElementById("question").innerHTML = currentQuestion.question;
    let scrambledOptions = scrambleOptions(currentQuestion.options);
    document.getElementById("option1-label").innerHTML = scrambledOptions[0];
    document.getElementById("option2-label").innerHTML = scrambledOptions[1];
    document.getElementById("option3-label").innerHTML = scrambledOptions[2];
    document.getElementById("option4-label").innerHTML = scrambledOptions[3];
    document.getElementById("option1").checked = false;
    document.getElementById("option2").checked = false;
    document.getElementById("option3").checked = false;
    document.getElementById("option4").checked = false;
    document.getElementById("score").innerHTML = `Score: ${score} | Streak: ${streak}`;
  }
  
  function checkAnswer() {
    const options = document.getElementsByName("option");
    let selectedOption;
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        let optionId = options[i].id;
        selectedOption = document.getElementById(optionId + "-label").innerHTML;
        break;
      }
    }
    if (selectedOption === undefined) {
      return;
    }
    let currentQuestion = remainingQuestions[0];
    if (selectedOption === currentQuestion.answer) {
      score += 1;
      streak += 1;
      document.getElementById("result").innerHTML = "Correct!";
    } else {
      streak = 0;
      document.getElementById("result").innerHTML = `Wrong! The correct answer was ${currentQuestion.answer}`;
    }
    displayQuestion();
  }
  
  function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    displayQuestion();
  }
  
  function endQuiz() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("final-score").innerHTML = `Final Score: ${score} | Final Streak: ${streak}`;
  }
  
  function restartQuiz() {
    remainingQuestions = [...questions];
    score = 0;
    streak = 0;
    document.getElementById("start").style.display =
  
  "block";
  document.getElementById("end").style.display = "none";
  document.getElementById("score").innerHTML = Score: ${score} | Streak: ${streak};
  }
  
  // add event listeners to buttons
  document.getElementById("start-btn").addEventListener("click", startQuiz);
  document.getElementById("submit-btn").addEventListener("click", checkAnswer);
  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
  
  // add code to hide quiz and end divs initially
  document.getElementById("quiz").style.display = "none";
  document.getElementById("end").style.display = "none";
}

export default Quiz;
