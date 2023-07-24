// Quiz database

const quizData = [
    {
      question: "Q1:  Green revolution in India was launched in-",
      option1: "1971-72",
      option2: "1966-67",
      option3: "1955-56",
      option4: "1980-81",
      
      correctAnswer: "ans2",
    },
    {
      question: "Q2.  Which among the following committees suggested the concept of Universal Banking?",
      option1:  "Raja chelliah committee",
      option2:  "RH Khan committee",
      option3:  "Charkvarthy Committee",
      option4:  "Abid Hussain Committee",
      
      correctAnswer: "ans2",
    },
    {
      question: "Q3:  M3 is the most important components among all money stock measures. What is the common name of M3?",
      option1: "  All money",
      option2: "total money",
      option3: "broad money",
      option4:  "white money",
      
      correctAnswer: "ans3",
    },
    {
      question:
        "Q4:  Which among the following is the most reasonable idea behind issuing the “sweet equity” by the companies now a days?",
        option1: "To provide more profits to the retail investors",  
        option2:  "To provide more profits to the corporate investors",  
        option3: "To retain the best employees ",  
       option4: "To save tax",
       
      correctAnswer: "ans3",
    },
      {
        question:
          "Q5:  5.  The competitive devalution by the countries would  badly affect which among the following?",
          option1:"   Exporters ",
          option2: "imports ",
          option3: "traders",
          option4:  "service provider",
          
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
    