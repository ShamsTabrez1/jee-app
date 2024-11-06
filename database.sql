-- Create database
CREATE DATABASE jee_prep;
USE jee_prep;

-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_subscribed BOOLEAN DEFAULT FALSE,
    trial_ends_at DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subjects table
CREATE TABLE subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

-- Chapters table
CREATE TABLE chapters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    subject_id INT,
    name VARCHAR(100) NOT NULL,
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);

-- Questions table
CREATE TABLE questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    chapter_id INT,
    question_text TEXT NOT NULL,
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT NOT NULL,
    option_d TEXT NOT NULL,
    correct_answer CHAR(1) NOT NULL,
    year INT NOT NULL,
    difficulty_level ENUM('easy', 'medium', 'hard'),
    FOREIGN KEY (chapter_id) REFERENCES chapters(id)
);

-- Tests table
CREATE TABLE tests (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    duration INT NOT NULL,
    status ENUM('pending', 'completed') DEFAULT 'pending',
    score FLOAT,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Test questions mapping
CREATE TABLE test_questions (
    test_id INT,
    question_id INT,
    user_answer CHAR(1),
    FOREIGN KEY (test_id) REFERENCES tests(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- Insert sample data
INSERT INTO subjects (name) VALUES 
('Physics'),
('Chemistry'),
('Mathematics');

INSERT INTO chapters (subject_id, name) VALUES
(1, 'Mechanics'),
(1, 'Electromagnetism'),
(1, 'Optics'),
(2, 'Physical Chemistry'),
(2, 'Organic Chemistry'),
(2, 'Inorganic Chemistry'),
(3, 'Algebra'),
(3, 'Calculus'),
(3, 'Coordinate Geometry');

-- Sample questions
INSERT INTO questions (chapter_id, question_text, option_a, option_b, option_c, option_d, correct_answer, year, difficulty_level) VALUES
(1, 'A particle moves in a circular path of radius 2m. If it completes one revolution in 4 seconds, what is its angular velocity?', 'π/2 rad/s', 'π rad/s', '2π rad/s', '4π rad/s', 'A', 2023, 'medium'),
(1, 'A force of 10N acts on a body of mass 2kg for 3 seconds. What is the change in momentum?', '30 kg⋅m/s', '20 kg⋅m/s', '15 kg⋅m/s', '10 kg⋅m/s', 'A', 2023, 'medium'),
(2, 'What is the magnetic field at the center of a circular current-carrying loop?', 'μ₀I/2R', 'μ₀I/R', '2μ₀I/R', 'μ₀I/4R', 'B', 2023, 'hard'),
(4, 'The pH of a solution is 4.5. What is the H+ ion concentration?', '3.16 × 10⁻⁵ M', '3.16 × 10⁻⁴ M', '3.16 × 10⁻³ M', '3.16 × 10⁻² M', 'B', 2023, 'medium'),
(7, 'If α and β are the roots of x² + px + q = 0, then α² + β² = ?', 'p² - 2q', '2q - p²', 'p² + 2q', '2p² - q', 'A', 2023, 'hard');