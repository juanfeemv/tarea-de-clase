import React, { useState, useEffect } from 'react';
import { TEAMS } from '../data/team.jsx';
import { generateSchedule } from '../utils/scheduler.jsx';
import LeagueHeader from './LeagueHeader.jsx';
import RoundSelector from './RoundSelector.jsx';
import MatchCard from './MatchCard.jsx';
import '../css/League.css';

const LeagueCalendar = () => {
  const [schedule, setSchedule] = useState([]);
  const [selectedRound, setSelectedRound] = useState(1);
  
  const MAX_ROUNDS = 38;

  useEffect(() => {
    const generated = generateSchedule(TEAMS);
    setSchedule(generated);
  }, []);

  const currentMatches = schedule.find(r => r.roundNumber === selectedRound);

  const handlePreviousRound = () => setSelectedRound(prev => prev - 1);
  const handleNextRound = () => setSelectedRound(prev => prev + 1);

  return (
    <div className="league-container">
      <LeagueHeader title="LaLiga EASPORTS">
        <RoundSelector
          currentRound={selectedRound}
          maxRounds={MAX_ROUNDS}
          onPrevious={handlePreviousRound}
          onNext={handleNextRound}
          roundType={currentMatches?.type}
        />
      </LeagueHeader>

      <div className="matches-grid">
        {currentMatches?.matches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
};

export default LeagueCalendar;