function quidditchScoreboard(teams, actions) {
  const teamMap = setTeamMap(teams);
  const actionsMap = {
    'Quaffle goal': 10,
    'Caught Snitch': 150
  }
  let filterSnitch = actions.split('Caught Snitch')[0];
  if (filterSnitch.length !== actions.length) filterSnitch += 'Caught Snitch';
  filterSnitch.split(',').forEach( action => {
    const actionsSplit = action.split(':');
    const team = actionsSplit[0].trim(), thisAction = actionsSplit[1].trim();
    if (thisAction.includes('foul')) {
      teamMap[team] -= 30;
    } else if (actionsMap[thisAction]) {
      teamMap[team] += actionsMap[thisAction];
    }
  })
  return buildAnswerString(teamMap);
}

function setTeamMap(teams) {
  let teamMap = {};
  let teamNames = teams.split('vs');
  teamNames.forEach( team => teamMap[team.trim()] = 0);
  return teamMap;
}

function buildAnswerString(teamMap) {
  const teamKeys = Object.keys(teamMap);
  return teamKeys.map( team => {
    return ' ' + team + (': ' + teamMap[team])
  }).join().trim();
}

const teams = 'Wimbourne Wasps vs Lancashire';
const actions = 'Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Lancashire: Quaffle goal, Lancashire: Quaffle goal, Lancashire: Quaffle goal, Lancashire: Quaffle goal, Lancashire: Quaffle goal, Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Lancashire: Quaffle-pocking foul, Lancashire: Quaffle goal, Wimbourne Wasps: Quaffle goal, Lancashire: Quaffle goal, Wimbourne Wasps: Quaffle goal'
quidditchScoreboard(teams, actions);