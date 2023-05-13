import React, { useEffect, useState } from 'react';
import OptionCard from './OptionCard';

const QuestionPage = ({ questionNumber, question, options, onSelect, onNext, isLastQuestion, stopQuiz }) => {

    const [seconds, setSeconds] = useState(100);
    const [isRunning, setIsRunning] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);


    const handleNextClick = () => {
        onSelect(selectedOption);
        setSelectedOption('');
        onNext();
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    useEffect(() => {

        setIsRunning(true);

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


    }, [isRunning]);


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

                    <OptionCard options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

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
