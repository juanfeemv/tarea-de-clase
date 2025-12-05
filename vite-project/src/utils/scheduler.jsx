export const generateSchedule = (teams) => {
  const n = teams.length;
  const totalRounds = n - 1; // 19 jornadas de ida
  const rounds = []; // Array final de jornadas

  // Copia de equipos para rotar (excluyendo el primero que se queda fijo)
  let rotatingTeams = [...teams];
  
  // 1. GENERAR IDA (Jornadas 1-19)
  for (let round = 0; round < totalRounds; round++) {
    const matches = [];
    
    // El algoritmo: Emparejar extremos del array
    for (let i = 0; i < n / 2; i++) {
      const home = rotatingTeams[i];
      const away = rotatingTeams[n - 1 - i];
      
      // Alternar local/visitante cada jornada para balancear
      if (round % 2 === 0) {
        matches.push({ home, away });
      } else {
        matches.push({ home: away, away: home });
      }
    }

    rounds.push({
      roundNumber: round + 1,
      type: 'IDA',
      matches: matches
    });

    // Rotar equipos: el último pasa al segundo puesto (el primero es fijo)
    // Array actual: [0, 1, 2 ... N] -> Mantener 0, mover último a 1
    rotatingTeams.splice(1, 0, rotatingTeams.pop());
  }

  // GENERAR VUELTA (Jornadas 20-38)
  const secondHalfRounds = rounds.map((round) => ({
    roundNumber: round.roundNumber + totalRounds,
    type: 'VUELTA',
    matches: round.matches.map(match => ({
      home: match.away,
      away: match.home
    }))
  }));

  return [...rounds, ...secondHalfRounds];
};