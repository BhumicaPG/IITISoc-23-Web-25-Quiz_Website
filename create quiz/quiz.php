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


