import React from 'react';

const Result = ({ questions, answers }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <h3>Answers:</h3>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.question} - Your answer: {answers[index]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
