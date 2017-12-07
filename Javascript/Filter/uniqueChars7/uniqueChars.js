const solve = (a,b) => {
 let answer = '';
 answer += a.split('').filter((char) => !b.includes(char)).join('');
 answer += b.split('').filter((char) => !a.includes(char)).join('');
 return answer;
};