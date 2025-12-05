import React from 'react';

const LeagueHeader = ({ title, children }) => {
  return (
    <header className="league-header">
      <h1>{title}</h1>
      {children}
    </header>
  );
};

export default LeagueHeader;
