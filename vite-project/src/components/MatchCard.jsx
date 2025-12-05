import React from 'react';

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <div className="team home">{match.home.name}</div>
      <div className="vs">VS</div>
      <div className="team away">{match.away.name}</div>
    </div>
  );
};

export default MatchCard;
