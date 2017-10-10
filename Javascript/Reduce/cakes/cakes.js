const cakes = (recipe, available) => {
  const recipeKeys = Object.keys(recipe);
  const availableKeys = Object.keys(available);

  return recipeKeys.reduce((acc, ingredient) => {
    const divisor = Math.floor(available[ingredient]/recipe[ingredient] || 0);
    acc = Math.min(divisor, acc);
    return acc;
  },Infinity);
}

const rec = { flour: 500, sugar: 200, eggs: 1 };
const avail = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

cakes(rec, avail); // => 2