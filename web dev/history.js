// Quiz database

const quizData = [
  {
    question: "Q1.  The indus valley civilization was characterized ?",
    option1:  "Caste based society",
    option2:  "Organized Urban Life",
    option3:  "Pastoral farming",
    option4:  "Workship of the forces of nature",

    correctAnswer: "ans2",
  },
  {
    question: "Q2.The government of India has decided to declare which of the following river as National River?",
    option1:  " Ganga",
    option2:  " Yamuna",
    option3:  "Jamuna", 
    option4:  "Godavari",
    
    correctAnswer: "ans1",
  },
  {
    question: "Q3   Where did the Lord Buddha take his last breath? ",
    option1: "  Bodhgaya",
    option2: "Kushinagar",
    option3: " Sarnath",
    option4:  "   Rajgir ",
    
    correctAnswer: "ans2",
  },
  {
    question:
      "Q4:Which ruler established Vikramshila University, famous for Buddhist followers?",
      option1: "  Gopal ",  
      option2:  " Dharmapal ",  
      option3: "  Devpal",  
     option4: "   Mahipal",
     
    correctAnswer: "ans2",
  },
    {
      question:
        "Q5:Junagarh inscription is related to ",
        option1:"   Gautamiputra Shatkarni",
        option2: "  Chandragupta 2",
        option3: "  Rudradaman",
        option4: "  Bimbisara  ",
        
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