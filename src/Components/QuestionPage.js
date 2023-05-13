import { Button } from '@mui/material';
import React, { useState } from 'react';

const QuestionPage = ({ questionNumber, question, options, onSelect, onNext, isLastQuestion }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (index, option) => {
        setSelectedOption(option);
    };

    const handleNextClick = () => {
        onSelect(selectedOption);
        setSelectedOption('');
        onNext();
    };

    return (
        <>
            <div className='questionPage'>
                <div className='questionPage-top'>
                    <div className='questionPage-head'>
                        <p className='sno'> {questionNumber} / 5</p>
                        <p className='timer'>10:00</p>
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

                    <Button 
                        variant="contained" 
                        onClick={handleNextClick} 
                        disabled={!selectedOption}
                    >
                        {isLastQuestion ? "Submit" : "Next"}
                    </Button>

                </div>
            </div>
        </>
    );
};

export default QuestionPage;
