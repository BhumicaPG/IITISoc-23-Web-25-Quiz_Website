//  Quiz database

const quizData = [
  {
    question: "Q1:1.  Who was the chairman of the National planning committee set up by the INC in 1938?",
    option1: "Mahatma Gandhi",
    option2: "Dadabhai Nauroji",
    option3: "Jawaharlal Nehru",
    option4: "none",
    correctAnswer: "ans3",
  },
  {
    question: "Q2:2.  Which one among following is notN a fixed capital?",
    option1: "Money",
    option2: "Buildings",
    option3: "Muchineries",
    option4: "None of these",
    correctAnswer: "ans1",
  },
  {
    question: "Q3: 3. Sudden decrease of birth rate would cause-",
    option1: "Increase in per capita income",
    option2: "Increase in savings",
    option3: "increase in investment",
    option4:  "None of these",
    
    correctAnswer: "ans1",
  },
  {
    question:
      "Q4: National development council(NDC) was constituted in",
      option1: "1950",  
      option2:  "1952",  
      option3: "1945 ",  
     option4: "1962",
     
    correctAnswer: "ans2",
  },
    {
      question:
        "Q5:  The monetary policy is formulated by-",
        option1:" Reserve Bank",
        option2: "Parliament ",
        option3: "State Bank of India",
        option4:  "Finance ministry",
        
      correctAnswer: "ans1",
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
  