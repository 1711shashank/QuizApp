import { Button } from '@mui/material';
import React, { useState } from 'react';
import OptionCard from './OptionCard';

const Question = ({ question, options, onSelect, onNext, isLastQuestion }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextClick = () => {
        onSelect(selectedOption);
        setSelectedOption('');
        onNext();
    };

    const handleSubmitClick = () => {
        onSelect(selectedOption);
        onNext();
    };

    return (
        <div className='Questions'>
            <p className='Question'>{question}</p>
            <ol className='Question-sno'>
                {options.map((option, index) => (
                    <li key={index}>
                        <div className='Questions-optionCard'>
                            <OptionCard option={option} selectedOption={selectedOption} handleOptionSelect={handleOptionSelect}/>
                        </div>

                    </li>
                ))}
            </ol>


            {isLastQuestion ? (
                <Button variant="contained" onClick={handleSubmitClick} disabled={!selectedOption}>
                    Submit
                </Button>
            ) : (
                <Button variant="contained" onClick={handleNextClick} disabled={!selectedOption}>
                    Next
                </Button>
            )}
        </div>
    );
};

export default Question;
