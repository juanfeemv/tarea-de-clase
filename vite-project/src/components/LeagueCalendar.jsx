import React, { useState, useEffect } from 'react';
import { TEAMS } from '../data/team.jsx';
import { generateSchedule } from '../utils/scheduler.jsx';
import '../css/League.css';

const LeagueCalendar = () => {
  const [schedule, setSchedule] = useState([]);
  // Controla que jornada ver
  const [selectedRound, setSelectedRound] = useState(1); 
  

  useEffect(() => {
    // Generamos el calendario al cargar
    const generated = generateSchedule(TEAMS);
    setSchedule(generated);
  }, []);

  const currentMatches = schedule.find(r => r.roundNumber === selectedRound);

  return (
    <div className="league-container">
      <header className="league-header">
        <h1>LaLiga EASPORTS</h1>
        <div className="controls">
          <button 
            disabled={selectedRound === 1} 
            onClick={() => setSelectedRound(prev => prev - 1)}>
            Ant
          </button>
          
          <span className="round-display">
            JORNADA {selectedRound} 
            <small>({currentMatches?.type})</small>
          </span>
          
          <button 
            disabled={selectedRound === 38} 
            onClick={() => setSelectedRound(prev => prev + 1)}>
            Sig 
          </button>
        </div>
      </header>

      <div className="matches-grid">
        {currentMatches?.matches.map((match, index) => (
          <div key={index} className="match-card">
            <div className="team home">{match.home.name}</div>
            <div className="vs">VS</div>
            <div className="team away">{match.away.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeagueCalendar;