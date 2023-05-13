import React, { useEffect, useState } from 'react';
import Question from './Question';
import Result from './Result';
import Home from './Home';

import './Quiz.css'
import QuestionPage from './QuestionPage';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(-1);
    const [answers, setAnswers] = useState([]);
    const [timer, setTimer] = useState(0);


    const questions = [
        {
            questionNumber:1,
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            correctAnswer: 'Paris'
        },
        {
            questionNumber:2,
            question: 'Which planet is closest to the Sun?',
            options: ['Mercury', 'Venus', 'Earth', 'Mars'],
            correctAnswer: 'Mercury'
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

                <Home
                    onNext={() => setCurrentQuestion(0)}
                />
            ) : (
                <>
                    <QuestionPage
                        questionNumber={questions[currentQuestion].questionNumber}
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
