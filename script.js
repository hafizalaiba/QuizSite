const quizData = [
  {
    question: "What is the capital of France?",
    option: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who developed the theory of relativity?",
    option: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Which programming language is used for web development?",
    option: ["Python", "C++", "JavaScript", "Swift"],
    answer: "JavaScript",
  },
  {
    question: "What is the powerhouse of the cell?",
    option: [
      "Nucleus",
      "Mitochondria",
      "Ribosome",
      "Endoplasmic Reticulum",
    ],
    answer: "Mitochondria",
  },
  {
    question: "What is the chemical symbol for gold?",
    option: ["Go", "Au", "Ag", "Gd"],
    answer: "Au",
  },
  {
    question: "How many continents are there in the world?",
    option: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Which planet is known as the Red Planet?",
    option: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What does CPU stand for?",
    option: [
      "Central Processing Unit",
      "Central Power Unit",
      "Computer Processing Unit",
      "Central Program Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Who wrote 'Hamlet'?",
    option: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest ocean on Earth?",
    option: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
];

let currentQuestion = 0;
let score = 0;
function loadQuestion() {
  let q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.option.forEach((option) => {
    let btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}
function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById(
      "quiz-container"
    ).innerHTML = `<h2>Quiz Over! Your score: ${score}</h2>`;
  }
}
loadQuestion();
