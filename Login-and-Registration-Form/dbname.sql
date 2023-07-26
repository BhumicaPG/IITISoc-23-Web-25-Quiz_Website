-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2021 at 03:57 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Dbname`
--

-- --------------------------------------------------------

--
-- Table structure for table `passkey`
--

-- CREATE TABLE `passkey` (
--   `username` varchar(1000) NOT NULL,
--   `secretquestion` varchar(1000) NOT NULL,
--   `secretanswer` varchar(1000) NOT NULL,
--   `secretkey` varchar(50) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --
-- -- Dumping data for table `passkey`
-- --

-- INSERT INTO `passkey` (`username`, `secretquestion`, `secretanswer`, `secretkey`) VALUES
-- ('admin', 'Favorite colour', 'Red', 'blood'),
-- ('user2', 'Place of birth', 'Udaipur', 'lake city'),
-- ('user1', 'Favorite topic', 'Cryptography', 'ciphers'),
-- ('user3', 'Favorite food', 'Pizza', 'Italian');

-- --------------------------------------------------------

--
--
--

-- CREATE TABLE `users` (
--   `username` varchar(1000) NOT NULL,
--   `Email` varchar(1000) NOT NULL,
--   `password` varchar(50) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --
-- -- Dumping data for table `users`
-- --

-- INSERT INTO `users` (`username`, `Email`, `password`) VALUES
-- ('admin', 'admin@gmail.com', 'admin'),
-- ('user1', 'user1@gmail.com', 'user1'),
-- ('user2', 'user2@gmail.com', 'user2'),
-- ('user3', 'user3@gmail.com', 'user3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `passkey`
-- --
-- ALTER TABLE `passkey`
--   ADD UNIQUE KEY `username` (`username`) USING HASH;

-- --
-- -- Indexes for table `purchase`
-- --
-- ALTER TABLE `purchase`
--   ADD UNIQUE KEY `username` (`username`) USING HASH;

--
-- Indexes for table `users`
-- --
-- ALTER TABLE `users`
--   ADD UNIQUE KEY `username` (`username`) USING HASH;
-- COMMIT;


-- --------------------------------------------------------
--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `quiz_id` INT(11) AUTO_INCREMENT PRIMARY KEY,
  `creator_username` VARCHAR(1000) NOT NULL,
  `quiz_name` VARCHAR(1000) NOT NULL,
  `num_questions` INT(11) NOT NULL,
  `question_type` VARCHAR(50) NOT NULL,
  `question_level` VARCHAR(50) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
--
-- Table structure for table `questions`
--

-- CREATE TABLE `questions` (
--   `question_id` INT(11) AUTO_INCREMENT PRIMARY KEY,
--   `quiz_id` INT(11) NOT NULL,
--   `question_text` TEXT NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
--
-- Table structure for table `options`
--

-- CREATE TABLE `options` (
--   `option_id` INT(11) AUTO_INCREMENT PRIMARY KEY,
--   `question_id` INT(11) NOT NULL,
--   `option_text` VARCHAR(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- CREATE TABLE quizzes (
--     quiz_id INT AUTO_INCREMENT PRIMARY KEY,
--     quiz_name VARCHAR(255) NOT NULL,
--     creator_username VARCHAR(100) NOT NULL,
--     quiz_description TEXT,
--     quiz_created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
