<!-- profile.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Website - Profile Page</title>
    <link rel="stylesheet" href="style2.css">
</head>
<body>
<?php
require('db.php');

// Check if the user is logged in
// session_start();
if (!isset($_SESSION['username'])) {
    // Redirect to the login page if not logged in
    header("Location: login.php");
    exit();
}

// Get the logged-in user's username
$username = $_SESSION['username'];

// Fetch user's registration information
$query = "SELECT * FROM `users` WHERE `username` = '$username'";
$result = mysqli_query($conn, $query);

if ($result && mysqli_num_rows($result) > 0) {
    $user = mysqli_fetch_assoc($result);
    $email = $user['Email'];
?>

    <div class="container">
        <div class="profile">
            <img class="profile-picture" src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="Profile Picture">
            <div>
            <h2 class="username"><?php echo $username ; ?></h2>
            <p class="user-email"><?php echo $email; ?></p>
            </div>
            
        </div>
        <button class="button2" onclick="redirectToCreateQuizPage()">Create Quiz</button>

<script>
  function redirectToCreateQuizPage() {
    window.location.href = 'http://localhost/create_quiz.php';
  }
</script>
        <!-- <div class="create-quizzes">
            <a href="index.html" class="create-quiz-link">Create Quiz</a>
        </div> -->
        <div class="created-quizzes">
            <h3>Created Quizzes</h3>
            <!-- Here, you can fetch and display the quizzes created by the user from the database -->
            <?php
            $quizQuery = "SELECT * FROM `quizzes` WHERE `creator_username` = '$username'";
            $quizResult = mysqli_query($conn, $quizQuery);

            if ($quizResult && mysqli_num_rows($quizResult) > 0) {
                echo "<div class='quiz-box'>";
                while ($quiz = mysqli_fetch_assoc($quizResult)) {
                    echo "<div class='quiz-item'>";
                    echo "<h4>" . $quiz['quiz_name'] . "</h4>";
                    // You can also display other quiz details if available
                    echo "</div>";
                }
                echo "</div>";
            } else {
                // Display the gray box when no quiz is created
                echo "<div class='quiz-box no-quiz-created'>";
                echo "No quiz created.";
                echo "</div>";
            }
            ?>
        </div>
    </div>

<?php
} else {
    // If user not found in the database, redirect to login page
    header("Location: login.php");
    exit();
}
?>

</body>
</html>
