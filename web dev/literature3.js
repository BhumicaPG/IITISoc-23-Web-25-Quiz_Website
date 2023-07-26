// Quiz database

const quizData = [
    {
      question: "Q1.  Who was the first Indian writer in English?",
      option1:  "Sake Dean Mahomet",
      option2:  "Raja Rao",
      option3:  "Rabindranath Tagore",
      option4:  " Nirad C Choudhary",
  
      correctAnswer: "ans1",
    },
    {
      question: "Q2.  Rabindranath Tagore’s Gitanjali originally written in",
      option1:  "Kannad ",
      option2:  "Bengali",
      option3:  "English",  
      option4:  "Tamil",
      
      correctAnswer: "ans2",
    },
    {
      question: "Q3.  Who was the first Indian author to win a literary award in the United States? ",
      option1: "Dhan Gopal Mukerji",
      option2: "Raja Rao",
      option3: " Rabindranath Tagore",
      option4:  " none",
      
      correctAnswer: "ans1",
    },
    {
      question:
        "Q4.  Who translated the entire Mahabharata into English?",
        option1: "R K Narayan",  
        option2:  "Kisari Mohan Ganguli ",  
        option3: "Vikram Seth",  
       option4: "none",
       
      correctAnswer: "ans2",
    },
      {
        question:
          "Q5.  ‘A Suitable Boy’ is written by",
          option1: "R K Narayan",  
        option2:  "Kisari Mohan Ganguli ",  
        option3: "Vikram Seth",  
       option4: "none",
          
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
    
  
  