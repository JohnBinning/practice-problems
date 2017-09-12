// Make a program that filters a list of strings and returns a with spies in it
// Spies' codenames have 5 letters in them
// Ex: Input = ["Ryan", "Kieran", "Jason", "James"] => ["Jason", "James"]

let input = ["Ryan", "Kieran", "Jason", "James"];

const findSpies = (names) => {
  return names.filter(name => {return name.length === 5})
};

findSpies(input);