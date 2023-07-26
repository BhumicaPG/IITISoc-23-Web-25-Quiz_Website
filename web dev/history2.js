// Quiz database

const quizData = [
    {
      question: "Q1:  When was the first passenger train in india",
      option1: "  March 1850",
      option2: "  April 1851",
      option3: "  March 1852 ",
      option4: "    April 1853",
      
      correctAnswer: "ans4",
    },
    {
      question: "Q2.  The government of India has decided to declare which of the following river as National River?",
      option1:  " Ganga",
      option2:  " Yamuna",
      option3:  "Jamuna",
      option4:  "Godavari",
      
      correctAnswer: "ans1",
    },
    {
      question: "Q3 Whose idol was an important creation of the people of Indus Valley Civilization? ",
      option1: "Nataraj",
      option2: "Buddha",
      option3: " Dancer statue",
      option4:  " Narsimha ",
      
      correctAnswer: "ans3",
    },
    {
      question:
        "Q4:  Which metal was first used by the Vedic people?",
        option1: "  copper ",  
        option2:  " iron ",  
        option3: "  gold  ",  
       option4: "   silver",
       
      correctAnswer: "ans1",
    },
      {
        question:
          "Q5:  The first city explored in India was __ ",
          option1:" Punjab",
          option2: "Harappan ",
          option3: "Mohenjodaro ",
          option4: "Sindh  ",
          
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
    