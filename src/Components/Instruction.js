import { Button } from '@mui/material';
import React from 'react';

const Instruction = ({ onNext }) => {
  return (
    <div>
      <h2>Instructions</h2>
      <Button variant="contained" onClick={onNext}>Start Quiz</Button>
    </div>
  );
};

export default Instruction;
