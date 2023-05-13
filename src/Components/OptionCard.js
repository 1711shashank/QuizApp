import React from 'react'

const OptionCard = ({ options, selectedOption, setSelectedOption }) => {
    return (
        <>
            <div className='quesionPage-options'>
                {options.map((option, index) => (
                    <p
                        className={`option ${selectedOption === option ? 'selected' : ''}`}
                        key={index}
                        onClick={() => setSelectedOption(option)}
                    >
                        {option}
                    </p>
                ))}
            </div>

        </>
    )
}

export default OptionCard