// Quiz database

const quizData = [
    {
      question: "Q1.  Which novel is previously titled as 'Grateful to Life and Death'?",
      option1:  " Swami and Friends",
      option2:  "The Bachelor of Arts",
      option3:  " The English teacher",
      option4:  " The Financial Experts",
  
      correctAnswer: "ans3",
    },
    {
      question: "Q2.  Which novel of Narayan was dubbed into a movie?",
      option1:  "Waiting for the Mahatma ",
      option2:  " The Guide",
      option3:  " A Tiger of Malgudi",  
      option4:  "Grandmother's Tale",
      
      correctAnswer: "ans2",
    },
    {
      question: "Q3.  'Great Indiam Hunting Stories' is edited by ",
      option1: "Stephen Alter",
      option2: "Shashi Tharoor",
      option3: "  Kisari Mohan Ganguli",
      option4:  " none",
      
      correctAnswer: "ans1",
    },
    {
      question:
        "Q4.  Which among the following is not a typical “Indian English Poem” by Nissim Ezekiel?",
        option1: "  The Railway Clerk",  
        option2:  "How the English Lessons Ended",  
        option3: "Goodbye Party for Miss Pushpa T.S.",  
       option4: "none",
       
      correctAnswer: "ans2",
    },
      {
        question:
          "Q5.  Which of the following awards is not given to Indian-English writers?",
          option1: "The Booker Prize",  
        option2:  " The Sahitya Akademi Award ",  
        option3: "The Gyanpeeth",  
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
    