// Quiz database

const quizData = [
    {
      question: "Q1:  1.With Which of the following sports M Vijayakrishna Memorial Cup is related to?",
       option1: " Badminton",
      option2: "Table Tennis",
      option3: "Horse Races",
      option4: "Polo",
      correctAnswer: "ans3",
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
      question: "Q3:Who is the IOC Coordination Commission Tokyo 2020?",
      option1: "Kirsty Coventry",
      option2: "Ban Ki-moon",
      option3: "John Coates",
      option4: "Barry Maister",
      correctAnswer: "ans3",
    },
    {
      question:
        "Q4: Which of the following wrestling styles is part of the Olympics?",
      option1: "Greco-Roman wrestling",
      option2: "Men's freestyle wrestling",
      option3: "Women's freestyle wrestling",
      option4: "All of the above",
      correctAnswer: "ans4",
    },
    {
      question:
        "Q5: Which of the following wrestling styles is part of the Olympics?",
      option1: "Rob May",
      option2: "Simon Hill",
      option3: "Franz Lambert",
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
  