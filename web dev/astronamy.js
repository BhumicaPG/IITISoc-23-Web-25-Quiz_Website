// Quiz database

const quizData = [
    {
      question: "Q1:Which women astronaut has set the record for the longest single spaceflight by a woman?",
      option1: "Peggy Whitson",
      option2: "Jessica Meir",
      option3: "Christina koch",
      option4: "Sunita Williams",
      
      correctAnswer: "ans3",
    },
    {
      question: "Q2.  Who speculated that our universe is expanding?",
      option1:  "Newton",
      option2:  "Edwin Hubble",
      option3:  "Galilio",
      option4:  "Copernicus",
      
      correctAnswer: "ans2",
    },
    {
      question: "Q3:Who had proved first that our earth and another planet are revolving ?",
      option1: "Aristotle",
      option2: "Galileo",
      option3: "Copernicus",
      option4:  " Edwin Hubble",
      
      correctAnswer: "ans3",
    },
    {
      question:
        "Q4: Which one of the following elements occurs most abundantly in our universe?",
        option1: " Hydrogen",  
        option2:  "Nitrogen",  
        option3: "Helium ",  
       option4: "Oxygen",
       
      correctAnswer: "ans1",
    },
      {
        question:
          "Q5:  5.   The stellar and solar source of energy is?",
          option1:"Nuclear fusion",
          option2: " Nuclear fission",
          option3: "Electromagnetic induction",
          option4:  "Electromotive force",
          
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
    