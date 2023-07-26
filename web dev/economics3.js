// Quiz database

const quizData = [
    {
      question: "Q1:Who among the following first made economic planning for India?",
      option1: "M Vishveshvarya",
      option2: "M N Roy”,",
      option3: "Jawaharlal Nehru",
      option4: "Dabhai Naoroji",
      correctAnswer: "ans1",
    },
    {
      question: "Q2: Which of the following is the central bank of India?",
      option1: "SBI",
      option2: "PNB",
      option3: "RBI",
      option4: "None of these",
      correctAnswer: "ans3",
    },
    {
      question: "Q3: Which of the following is the commercial bank?",
      option1: "cooperative banks",
      option2: "State Bank of India",
      option3: "Regional Rural Banks,",
      option4: "None of these”,",
      correctAnswer: "ans2",
    },
    {
      question:
        "Q4: The majority of workers in India are-",
      option1: "Self Employed",
      option2: "Regular salaried workers",
      option3: "Casual workers",
      option4: "None of the above",
      correctAnswer: "ans1",
    },
      {
        question:
          "Q5: RBI was nationalized in-?",
        option1: "1955",
        option2: "1935",
        option3: "1949",
        option4: "none of the above",
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