import { Button } from '@mui/material';
import React, { useState } from 'react';

const QuestionPage = ({ question, options, onSelect, onNext, isLastQuestion }) => {

    return (
        <>
            <div className='questionPage'>
                <div className='questionPage-top'>
                    <div className='questionPage-head'>
                        <p className='sno'>01 / 05</p>
                        <p className='timer'>10:00</p>
                    </div>
                    <div className='questionPage-question'>  What is the capital of France? What is the capital of France? What is the capital of France? What is the capital of France? What is the capital of France? What is the capital of France? What is the capital of France?</div>
                </div>
                <div className='questionPage-bottom'>
                    <div className='quesionPage-options'>
                        <p className='option'> option 1 </p>
                        <p className='option'> option 2 </p>
                        <p className='option'> option 3 </p>
                        <p className='option'> option 4 </p>
                    </div>
                    <button> Next </button>
                </div>

            </div>

        </>
    );
};

export default QuestionPage;
