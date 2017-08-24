// We want to input a word as a string, and return a list representing that word as a taco.

// Key

// all vowels (except 'y') = beef

// t = tomato

// l = lettuce

// c = cheese

// g = guacamole

// s = salsa

// NOTE
// We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

// Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

// Note that no matter what ingredients are passed, our taco will always have a shell.

// Test.assertDeepEquals(tacofy("ggg"), ['shell', 'guacamole', 'guacamole', 'guacamole', 'shell'])
// Test.assertDeepEquals(tacofy("ogl"),['shell', 'beef', 'guacamole', 'lettuce', 'shell'])
// Test.assertDeepEquals(tacofy("ydjkpwqrzto"), ['shell', 'tomato', 'beef', 'shell'])

const wordKey = {
  t: 'tomato',
  l: 'lettuce',
  c: 'cheese',
  g: 'guacamole',
  s: 'salsa',
  a: 'beef',
  e: 'beef',
  i: 'beef',
  o: 'beef',
  u: 'beef'
};

const tacofy = (word) => {
  const ingredientKeys = Object.keys(wordKey);
  const newWord = word.toLowerCase().split('');
  const filteredWord = newWord.filter( letter => {
    return ingredientKeys.includes(letter);
  });
  const ingredients = filteredWord.map(( letter ) => {
      return wordKey[letter];
  });
  
  ingredients.push('shell');
  ingredients.unshift('shell');
  return ingredients;
};