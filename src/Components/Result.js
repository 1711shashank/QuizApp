import React, { useEffect, useState } from 'react';
import TrophyImg from './images/trophy.png';

const Result = ({ questions, answers, setCurrentQuestion }) => {

  console.log(answers);

  const [score, setScore] = useState(0);

  const calculateScore = (questions, userAnswers) => {
    let count = 0;

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const userAnswer = userAnswers[i];

      if (userAnswer === question.correctAnswer) {
        count++;
      }
    }

    return count;
  }


  useEffect(() => {
    setScore(calculateScore(questions, answers));
  }, [])



  return (
    <div className='result'>
      <p className='result-head'>Quiz Completed!</p>
      <img src={TrophyImg} />
      <p className='result-user-name'> Kumar Shashank </p>
      <p className='result-text'> {` You scored ${score} out of ${questions.length}`} </p>
      <button className='result-button' onClick={() => setCurrentQuestion(-1)}> Finish </button>
    </div>
  );
};

export default Result;
