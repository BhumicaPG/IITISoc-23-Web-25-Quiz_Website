<!DOCTYPE html>
<html>
<head>
  <title>Quiz Questions</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Quiz Questions</h1>
    <form id="questionsForm" action="submit.php" method="post">
        <?php


require('db.php');

if (isset($_POST['numQuestions'])) {
    // Process form data and create the quiz as before

    // Store quiz data in the database
    $quizName = "Quiz Name"; // You can get this from the user if needed
    $numQuestions = $_POST['numQuestions'];
    $questionType = $_POST['questionType'];
    $questionLevel = $_POST['questionLevel'];

    // Create an SQL query to insert quiz details into the database
    $insertQuery = "INSERT INTO quizzes (quiz_name, num_questions, question_type, question_level) 
                    VALUES ('$quizName', '$numQuestions', '$questionType', '$questionLevel')";
    $result = mysqli_query($conn, $insertQuery);
    if ($result) {
        $quizId = mysqli_insert_id($conn); // Get the auto-generated quiz_id from the last INSERT query
        // Now, store each individual question and its options in another table (e.g., questions_options)
        for ($i = 1; $i <= $numQuestions; $i++) {
            $question = $_POST["question$i"];
            // Store the question in the database and get the auto-generated question_id
            $insertQuestionQuery = "INSERT INTO questions (quiz_id, question_text) VALUES ('$quizId', '$question')";
            $result = mysqli_query($conn, $insertQuestionQuery);
            $questionId = mysqli_insert_id($conn);

            if ($questionType === 'multiple' || $questionType === 'single') {
                // Loop through the options and store them in the database
                for ($j = 1; $j <= 4; $j++) {
                    $option = $_POST["option${i}_$j"];
                    // Store the option in the database
                    $insertOptionQuery = "INSERT INTO options (question_id, option_text) VALUES ('$questionId', '$option')";
                    $result = mysqli_query($conn, $insertOptionQuery);
                }
            }
        }
        // Redirect to the profile page after successful quiz submission
        header("Location: profile.php");
        exit();
    } else {
        echo "Error creating quiz: " . mysqli_error($conn);
    }
}

$conn->close();




        $numQuestions = $_POST['numQuestions'];
        $questionType = $_POST['questionType'];
        $questionLevel = $_POST['questionLevel'];
        
        for ($i = 1; $i <= $numQuestions; $i++) {
          echo "<h3>Question $i</h3>";
          echo "<label for='question$i'>Type your question:</label>";
          echo "<input type='textarea id='question$i' name='question$i' required>";
          
          if ($questionType === 'multiple' || $questionType === 'single') {
            for ($j = 1; $j <= 4; $j++) {
              echo "<label for='option${i}_$j'>Option $j:</label>";
              echo "<input type='text' id='option${i}_$j' name='option${i}_$j' required>";
            }
          }
          
          echo "<br>";
        }
      ?>
       
      <button type="submit">Submit</button>
    </form>
  </div> 
</body>
</html>


