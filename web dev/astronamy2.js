// Quiz database

const quizData = [
    {
      question: "Q1:  Which of the following planets has the largest number of planets?",
      option1: "Saturn",
      option2: "Jupiter",
      option3: "Mars",
      option4: " Neptune",
      
      correctAnswer: "ans1",
    },
    {
      question: "Q2.Which one of the following planet is also called morning star or evening star?",
      option1:  "Mercury",
      option2:  "Venus",
      option3:  "Mars",
      option4:  "Saturn",
      
      correctAnswer: "ans2",
    },
    {
      question: "Q3:The planet which completes one revolution in 88 days around the Sun is:",
      option1: " Mercury",
      option2: " Venus",
      option3: " Mars",
      option4: "Saturn",
      
      correctAnswer: "ans1",
    },
    {
      question:
        "Q4:The largest circular storm in our solar system is on the surface of which of the following planets?",
        option1: " Jupiter",  
        option2: "Venus",  
        option3: " Uranus",  
        option4: " Earth",
       
      correctAnswer: "ans2",
    },
      {
        question:
          "Q5:The biggest asteroid known is:",
          option1:" Vesta",
          option2:" Icarus",
          option3:"Ceres",
          option4:"Eros",
          
        correctAnswer: "ans2",
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
    