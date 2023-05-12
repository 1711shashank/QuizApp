import { Button } from '@mui/material';
import React, { useState } from 'react';

const QuestionPage = ({ question, options, onSelect, onNext, isLastQuestion }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
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
                        <p className='sno'>01 / 05</p>
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
                                onClick={() => handleOptionSelect(option)}
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
