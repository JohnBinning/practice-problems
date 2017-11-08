const longestConsec = (strArr, words) => {
    if(!words || strArr.length < words) return '';
    let highestLength = 0;
    let answer;
    for(let i = 0; i < strArr.length; i++)  {
      let currentLength = 0;
      for(let j = i; j < i + words && j < strArr.length; j++) {
        currentLength += strArr[j].length;
      }
      if(currentLength > highestLength) {
        highestLength = currentLength;
        answer = strArr.slice(i, i + words);
      }
    }
    return answer ? answer.join('') : '';
}