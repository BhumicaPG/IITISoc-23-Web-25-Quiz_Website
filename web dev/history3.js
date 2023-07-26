// Quiz database

const quizData = [
    {
      question: "Q1: Who was the founder of the Indian National Congress?",
      option1: "  Bal Gangadhar Tilak",
      option2: "  Mahatma Gandhi",
      option3: "  Allan octavian hume ",
      option4: "    Jawaharlal Nehru ",
      
      correctAnswer: "ans3",
    },
    {
      question: " 2.  Champaran Satyagraha was related to_____?",
      option1:  " Plague",
      option2:  " Mill owners ",
      option3:  " Indigo",
      option4:  " Fresh assessment of land",
      
      correctAnswer: "ans3",
    },
    {
      question: "Q3 When was first telegraph line started in India? ",
      option1: "1900   ",
      option2: "  1851",
      option3: "  1884",
      option4:  " 1875 ",
      
      correctAnswer: "ans2",
    },
    {
      question:
        "Q4:  4.  Who is the author of Rajatarangini ?",
        option1: "  Panini ",  
        option2:  " Kautilya ",  
        option3: "  Kalhana  ",  
       option4: "   Asavaghosa",
       
      correctAnswer: "ans3",
    },
      {
        question:
          "Q5:  5.  What was the childhood name of Chanakya? ",
          option1:"   Kumar ",
          option2: "  Dev Gupta  ",
          option3: "  Vishnu Gupta ",
          option4: "  Vishal Gupta   ",
          
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