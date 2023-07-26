// Quiz database

const quizData = [
    {
      question: "Q1.  Which novel of R. K. Narayan is similar to the ‘A Doll’s House’?",
      option1:  "The Dark Room",
      option2:  "The Bachelor of Arts",
      option3:  " The English teacher",
      option4:  " The Financial Experts",
  
      correctAnswer: "ans1",
    },
    {
      question: "Q2.  The first Indian author to win the prestigious Pulitzer Prize in the U. S. A. was",
      option1:  " Anita Desai ",
      option2:  " Jhumpa Lahiri",
      option3:  " Vikram Seth",  
      option4:  " Khushwant Singh",
      
      correctAnswer: "ans2",
    },
    {
      question: "Q3.  Who among the following writers asserted ‘Commonwealth Literature does not exist’? ",
      option1: "Amitav Ghosh",
      option2: "Salman Rushdie",
      option3: "V. S. Naipaul",
      option4:  " none",
      
      correctAnswer: "ans2",
    },
    {
      question:
        "Q4.  Which of the following novels is NOT a partition novel?",
        option1: "Azadi",  
        option2:  "Tamas",  
        option3: "Clear Light of the Day",  
       option4: "That Long Silence",
       
      correctAnswer: "ans4",
    },
      {
        question:
          "Q5.  The Indian English poet who addressed the question “of time” in his poetry is:",
          option1: "Nissim Ezekiel",  
        option2:  " R. Parthsarathy ",  
        option3: "A. K. Ramanujan",  
       option4: "none",
          
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
    