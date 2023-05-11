import React from 'react'

const OptionCard = ({ option, selectedOption, handleOptionSelect }) => {
    return (
        <>
            <div className='OptionCard'>
                <div className='Option'>
                    {option}
                </div>
                <input
                    className='Questions-radio'
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                />
            </div>
        </>
    )
}

export default OptionCard