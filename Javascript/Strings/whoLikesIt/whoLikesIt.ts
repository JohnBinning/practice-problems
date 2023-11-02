export const likes = (userNameList : string[]) : string => {
  if (!userNameList.length) return 'no one likes this';
  if (userNameList.length === 1) return `${userNameList[0]} likes this`;
  if (userNameList.length === 2) return `${userNameList[0]} and ${userNameList[1]} like this`;
  if (userNameList.length === 3) return `${userNameList[0]}, ${userNameList[1]} and ${userNameList[2]} like this`;
  return `${userNameList[0]}, ${userNameList[1]} and ${userNameList.length - 2} others like this`;
}

/*
Implement the function which takes an array containing the names of people 
that like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this" 

*/
