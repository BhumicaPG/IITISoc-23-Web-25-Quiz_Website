// Quiz database

const quizData = [
    {
      question: "Q1:  1.With Which of the following sports M Vijayakrishna Memorial Cup is related to?",
    //    3.Who is the IOC Coordination Commission Tokyo 2020?
    //   [A] Kirsty Coventry[B] Ban Ki-moon[C] John Coates[D] Barry Maister
      
    //    4.Which of the following wrestling styles is part of the Olympics?
    //   [A] Greco-Roman wrestling[B] Men’s freestyle wrestling[C] Women’s freestyle wrestling[D] All of the above
      
    //    5.Who has composed the FIFA anthem?
    //   [A] Rob May[B] Simon Hill[C] Franz Lambert[D] All of the above",
      option1: " Badminton",
      option2: "Table Tennis",
      option3: "Horse Races",
      option4: "Polo",
      correctAnswer: "ans1",
    },
    {
      question: "Q2: Which among the following sporting event has become the first ever to be broadcast live on the popular video sharing website YouTube?",
      option1: "2010 Africa Cup of Nations",
      option2: "FIFA World Cup",
      option3: "Indian Premier League -III",
      option4: " T-20 World Cup",
      correctAnswer: "ans3",
    },
    {
      question: "Q3: Apart from <b> tag, what other tag makes text bold?",
      option1: "<fat>",
      option2: "<strong>",
      option3: "<black>",
      option4: "<emp>",
      correctAnswer: "ans2",
    },
    {
      question:
        "Q4: Which of the following is correct about features of JavaScript?",
      option1: "Javascript is complementary to and integrated with HTML.",
      option2: "Javascript is open and cross platform.",
      option3: "Both of the above",
      option4: "All of the above",
      correctAnswer: "ans3",
    },
  ];
  
  // Functionality starts from here
  
  let counter = 0;
  
  let score = document.querySelector("#scoring");
  
  let data;
  
  function loadQuestion() {
    data = quizData[counter];
    let question = document.querySelector(".question");
    question.innerText = data.question;
    let option1 = document.querySelector(".answer1");
    option1.innerText = data.option1;
    let option2 = document.querySelector(".answer2");
    option2.innerText = data.option2;
    let option3 = document.querySelector(".answer3");
    option3.innerText = data.option3;
    let option4 = document.querySelector(".answer4");
    option4.innerText = data.option4;
  }
  
  loadQuestion();
  
  
  let options = document.querySelectorAll(".ans");
  
  let scoreBoard = 0;
  let userChoice;
  
  // HANDLING ONCLICK SUBMIT EVENT
  
  const deselectAll = () => {
      options.forEach((option) => {
          option.checked = false;
      })
  }
  
  let submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        userChoice = options[i].id;
      }
    }
  
    if (userChoice === data.correctAnswer) {
      scoreBoard++;
    }
  
    deselectAll();
  
    counter++;
    if (counter < quizData.length) {
      loadQuestion();
    } else {
      score.innerHTML = `
                   <h2>You scored ${scoreBoard}/${quizData.length} ✌️</h2>
                  <button onClick="window.location.reload();">Play Again</button>
          `;
      submit.style.visibility = "hidden";
      score.classList.remove("scoreBox");
      score.classList.add("showScore");
    }
  });
  