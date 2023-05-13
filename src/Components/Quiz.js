import React, { useEffect, useState } from 'react';
import Question from './Question';
import Result from './Result';
import Home from './Home';

import './Quiz.css'
import QuestionPage from './QuestionPage';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(-1);
    const [answers, setAnswers] = useState([]);


    const questions = [
            {
                questionNumber: 1,
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Making Language"],
                correctAnswer: "Hyper Text Markup Language"
            },
            {
                questionNumber: 2,
                question: "What is the main purpose of CSS?",
                options: ["To create interactive web pages", "To define the structure of a web page", "To add interactivity to a website", "To style the visual presentation of a web page"],
                correctAnswer: "To style the visual presentation of a web page"
            },
            {
                questionNumber: 3,
                question: "Which programming language is often used for developing Android apps?",
                options: ["Java", "Python", "C#", "Ruby"],
                correctAnswer: "Java"
            },
            {
                questionNumber: 4,
                question: "What does CPU stand for?",
                options: ["Central Processing Unit", "Computer Processing Unit", "Central Processor Unit", "Computer Processor Unit"],
                correctAnswer: "Central Processing Unit"
            },
            {
                questionNumber: 5,
                question: "What is the purpose of a firewall in network security?",
                options: ["To prevent unauthorized access to a network", "To boost network performance", "To encrypt network traffic", "To monitor network activity"],
                correctAnswer: "To prevent unauthorized access to a network"
            }
        ];
        

    const handleAnswerSelect = (selectedOption) => {
        setAnswers([...answers, selectedOption]);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentQuestion(-2);
        }
    };


    return (
        <>
            {currentQuestion === -2 ? (
                <Result questions={questions} answers={answers} setCurrentQuestion={setCurrentQuestion} />
            ) : currentQuestion === -1 ? (
                // <Timer/>
                <Home onNext={() => setCurrentQuestion(0)} />
            ) : (
                <>
                    <QuestionPage
                        questionNumber={questions[currentQuestion].questionNumber}
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        onSelect={handleAnswerSelect}
                        onNext={handleNextQuestion}
                        stopQuiz={setCurrentQuestion}
                        isLastQuestion={currentQuestion === questions.length - 1}
                    />
                </>
            )}
        </>
    );
};

export default Quiz;
