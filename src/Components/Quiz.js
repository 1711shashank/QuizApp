import React, { useState } from 'react';
import Instruction from './Instruction';
import Question from './Question';
import Result from './Result';
import Home from './Home';

import './Quiz.css'
import QuestionPage from './QuestionPage';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            correctAnswer: 'Paris'
        },
        {
            question: 'Which planet is closest to the Sun?',
            options: ['Mercury', 'Venus', 'Earth', 'Mars'],
            correctAnswer: 'Mercury'
        }
        // Add more questions here
    ];

    const handleAnswerSelect = (selectedOption) => {
        setAnswers([...answers, selectedOption]);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentQuestion(-3);
        }
    };

    return (
        <>
            {currentQuestion === -3 ? (
                <Result questions={questions} answers={answers} />
            ) : currentQuestion === -2 ? (

                <Home
                    onNext={() => setCurrentQuestion(-1)}
                />
            ) : currentQuestion === -1 ? (
                <Instruction
                    onNext={() => setCurrentQuestion(0)}
                />
            ) : (
                <>
                    <QuestionPage
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        onSelect={handleAnswerSelect}
                        onNext={handleNextQuestion}
                        isLastQuestion={currentQuestion === questions.length - 1}
                    />
                </>
            )}
        </>
    );
};

export default Quiz;
