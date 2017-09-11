// Create a function that takes two arguments:

// 1) An array of objects which feature the season, the team and the country of the Champions League winner.

// 2) Country (as a string, for example, 'Portugal')

// You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

// For example if the input array is as follows:

// const winnerList1 = [
//   { season: '1996–97', team: 'Borussia Dortmund', country: 'Germany' },
//   { season: '1997–98', team: 'Real Madrid', country: 'Spain' },
//   { season: '1998–99', team: 'Manchester United', country: 'England' },
//   { season: '1999–00', team: 'Real Madrid', country: 'Spain' },
//   { season: '2000–01', team: 'Bayern Munich', country: 'Germany' },
//   { season: '2001–02', team: 'Real Madrid', country: 'Spain' },
//   { season: '2002–03', team: 'Milan', country: 'Italy' }
// ]

// countWins(winnerList1, 'Spain') => should return 3
// countWins(winnerList1, 'Germany') => should return 2
// countWins(winnerList1, 'Sportland') => should return 0

const countWins = (winnerList, country) => {
  let answer = 0;
  winnerList.forEach( (winner) => {
    if(winner.country === country) {
      answer += 1;
    }
  })
  return answer;
}