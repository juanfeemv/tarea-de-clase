import React from 'react';

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      {/* Equipo Local */}
      <div className="team home">
        {match.home.name}
      </div>

      {/* Separador Central */}
      <div className="vs-container">
        <span className="vs">VS</span>
      </div>

      {/* Equipo Visitante */}
      <div className="team away">
        {match.away.name}
      </div>
    </div>
  );
};

export default MatchCard;