import React, { useState } from "react";
import "./styles/Quiz.css";

function Quiz() {
  const allQuestions = [
    {
      question: "Care este cea mai mare constribuție la formarea industriei în județul Vâlcea?",
      answers: [
        "Comerţ",
        "Administraţia publică",
        "Construcţiile",
        "Agricultura"
      ],
      correctAnswer: "Comerţ"
    },

    {
      question: "De ce județul Timișoara are atuuri în forța de muncă?",
      answers: [
        "Infrastructura dezvoltată",
        "Competivitatea mediului",
        "Rata antreprenorială ridicată",
        "Piața locală stabilă"
      ],
      correctAnswer: "Infrastructura dezvoltată"
    },
    {
      question: "Care sunt cele mai mari investiți din județul Galați? ",
      answers: [
        "Proiecte de apă și canal",
        "Proiecte de infrastructură rutieră",
        "Proiecte de transport în comun",
        "Proiecte de energie verde"
      ],
      correctAnswer: "Proiecte de apă și canal"
    },
    {
      question: "Din ce cauză are Aradul un număr mare de investitori?",
      answers: [
        "Din cauză că e port.",
        "Din cauză că e aprope de graniță.",
        "Din cauză că e un punct de atracție turistic.",
        "Din cauză că are o industrie foarte dezvoltată."
      ],
      correctAnswer: "Din cauză că e aprope de graniță."
    },
    {
      question: "În ce industrie s-au facut cele mai mari realizări din județul Giurgiu?",
      answers: [
        "industria alimentară şi a băuturilor ",
        "extracţia petrolului şi gazelor naturale",
        "industria textilă şi a confecţiilor din textile",
        "industria metalurgică"
      ],
      correctAnswer: "industria alimentară şi a băuturilor "
    },
    {
      question: "Pe ce domenii se investește cel mai mult în judetul Gorj?",
      answers: [
        "Apă și canal ",
        "Școli și grădinițe",
        " Transport în comun",
        "Unități medicale"
      ],
      correctAnswer: "Apă și canal "
    },
    {
      question: "Care este  activitatea predominantă care se realizeaza în județul Hunedoara?",
      answers: [
        "Comerţul",
        "Industria",
        " Construcțiile ",
        "Activităţile profesionale  ştiinţifice şi tehnice"
      ],
      correctAnswer: "Comerţul"
    },
    {
      question: "Care sunt principalele ramuri din județul Ialomița?",
      answers: [
        "producerea îngrăşămintelor chimice",
        "ndustria confecţiilor",
        "producerea de aparate electronice",
        " mobilă şi prelucrarea lemnului"
      ],
      correctAnswer: "producerea îngrăşămintelor chimice"
    },
    {
      question: "Cu ce se ocupă cel mai mult localnicii din județul Iași?",
      answers: [
        "creșterea ovinelor",
        "viticultura",
        "piscicultura",
        " apicultură"
      ],
      correctAnswer: "creșterea ovinelor"
    },
    {
      question: "Spre ce are precădere orientarea în agricultură în județul Maramureș?",
      answers: [
        "apicultură",
        "creșterea animalelor",
        "pomicultură",
        "viticultură"
      ],
      correctAnswer: "creșterea animalelor"
    },
    {
      question: "Din ce cauză județul Mureș este atât de cunoscut după locul de așezare?",
      answers: [
        "Este bogat foriestier",
        "Are pășuni de mari întinderi",
        "Are terenuri agricole imense",
        "Posibilitate de irigare a terenurilor"
      ],
      correctAnswer: "Este bogat foriestier"
    },
    {
      question: "În ce constă economia județului Neamț?",
      answers: [
        "Potențialul energetic al râurilor",
        "Zonele vaste acoperite de păduri",
        "Pășunile și fânețele",
        "Pogăția și diversitatea materialelor de construcții existente"
      ],
      correctAnswer: "Potențialul energetic al râurilor"
    },
    {
      question: "Ce resurse naturale dispune județul Sălaj?",
      answers: [
        "Lignit",
        "Cărbune brun",
        "Hidrocarburi",
        "Șist cărbunos"
      ],
      correctAnswer: "Lignit"
    },
    {
      question: "Ce intreprinderi se afla în județul  Sibiu?",
      answers: [
        "Industria constructoare de mașini",
        "Industria confecțiilor",
        "Industria produselor alimentare",
        "Industria de rechizite școlare"
      ],
      correctAnswer: "Industria constructoare de mașini"
    },
    {
      question: "Care sunt prinicipalele ponderi în industria județului Teleorman?",
      answers: [
        "Mașini si echipamente",
        "Metalurgie",
        "Industria alimentara",
        "Chimie"
      ],
      correctAnswer: "Mașini si echipamente"
    },
    {
      question: "Care este cea mai mare constribuție la formarea industriei în județul Vâlcea?",
      answers: [
        "Comerţ",
        "Administraţia publică",
        "Construcţiile",
        "Agricultura",
      ],
      correctAnswer: "Comerţ"
    },]
    ;



    const [questions, setQuestions] = useState(() =>
    shuffle(allQuestions).slice(0, 5)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizStarted(true);
  };

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert(`Quiz complete! Your final score is ${score}`);
      setCurrentQuestionIndex(null);
      setQuizStarted(false);
      setQuestions(shuffle(allQuestions).slice(0, 5));
    }
  };

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <h2>Are you ready to start?</h2>
        <button onClick={handleStartQuiz}>Start Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div className="answer-options">
        {questions[currentQuestionIndex].answers.map((answer) => (
          <button key={answer} onClick={() => handleAnswerClick(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <p>Current score: {score}</p>
    </div>
  );
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default Quiz;