import React from 'react';

const RoundSelector = ({ currentRound, maxRounds, onPrevious, onNext, roundType }) => {
  return (
    <div className="controls">
      <button 
        disabled={currentRound === 1} 
        onClick={onPrevious}>
        Ant
      </button>
      
      <span className="round-display">
        JORNADA {currentRound} 
        <small>({roundType})</small>
      </span>
      
      <button 
        disabled={currentRound === maxRounds} 
        onClick={onNext}>
        Sig 
      </button>
    </div>
  );
};

export default RoundSelector;
