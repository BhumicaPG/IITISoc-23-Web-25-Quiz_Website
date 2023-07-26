// Quiz database

const quizData = [
    {
      question: "Q1:Rounded to the nearest day, the Mercurian year is equal to:",
      option1: "111 days",
      option2: " 88 days",
      option3: "50 days",
      option4: "25 days",
      
      correctAnswer: "ans2",
    },
    {
      question: "Q2. One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on: ?",
      option1:  "Jupiter's moon Callisto",
      option2:  "Venus",
      option3:  "Saturn's moon Titan",
      option4:  "Mars",
      
      correctAnswer: "ans4",
    },
    {
      question: "Q3:: One Jupiter day is equal to which of the following?",
      option1: "30 hrs 40 min",
      option2: "9 hrs 50 min",
      option3: "3 hrs 20 min",
      option4: "52 hrs 10 min",
      
      correctAnswer: "ans2",
    },
    {
      question:
        "Q4: The time interval between two successive occurrences of a specific type of alignment of a planet (or the moon) with the sun and the earth is referred to as:? ",
        option1: " a conjunction",  
        option2: "an opposition",  
        option3: "a sidereal period",  
        option4: " a synodic period",
       
      correctAnswer: "ans4",
    },
      {
        question:
          "Q5:The sunspot cycle is:",
          option1:" 3 years",
          option2:"11 years",
          option3:"26 years",
          option4:"49 years",
          
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
    