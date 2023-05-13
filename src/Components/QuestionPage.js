import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const QuestionPage = ({ questionNumber, question, options, onSelect, onNext, isLastQuestion, stopQuiz }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (index, option) => {
        setSelectedOption(option);
    };

    const handleNextClick = () => {
        onSelect(selectedOption);
        setSelectedOption('');
        onNext();
    };

    const [seconds, setSeconds] = useState(100);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

        startTimer();

        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds === 0) {
                        clearInterval(intervalId);
                        setIsRunning(false);
                        stopQuiz(-2);
                        return 0;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };

    }, [isRunning]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };



    return (
        <>
            <div className='questionPage'>
                <div className='questionPage-top'>
                    <div className='questionPage-head'>
                        <p className='sno'> {questionNumber} / 5</p>
                        <p className='timer'>{formatTime(seconds)}</p>
                    </div>
                    <div className='questionPage-question'>{question}</div>
                </div>

                <div className='questionPage-bottom'>
                    <div className='quesionPage-options'>
                        {options.map((option, index) => (
                            <p
                                className={`option ${selectedOption === option ? 'selected' : ''}`}
                                key={index}
                                onClick={() => handleOptionSelect(index, option)}
                            >
                                {option}
                            </p>
                        ))}
                    </div>

                    <button
                        className={`nextButton ${isLastQuestion ? 'submit' : ''}`}
                        variant="contained"
                        onClick={handleNextClick}
                        disabled={!selectedOption}
                    >
                        {isLastQuestion ? "Submit" : "Next"}
                    </button>


                </div>
            </div>
        </>
    );
};

export default QuestionPage;
