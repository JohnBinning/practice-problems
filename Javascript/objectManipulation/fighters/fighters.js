function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
}

const declareWinner = (fighter1, fighter2, firstAttacker) => {
  const fighterArray = [fighter1, fighter2];
  
  let currentAttacker;
  let currentAttackee;
  
  if (fighter1.name === firstAttacker) {
    currentAttacker = fighter1;
    currentAttackee = fighter2;
  } else {
    currentAttacker = fighter2;
    currentAttackee = fighter1;
  }
  
  while(fighter1.health > 0 && fighter2.health > 0) {
    currentAttackee.health -= currentAttacker.damagePerAttack;
    [currentAttacker, currentAttackee] = [currentAttackee, currentAttacker];
  }
  
  return currentAttackee.name;
}

const greg = new Fighter('greg', 10, 3);
const larry = new Fighter('larry', 8, 2);
const superMan = new Fighter('steve', 50, 5);

declareWinner(greg, larry, 'greg'); // => 'greg'
declareWinner(greg, superMan, 'superMan'); // => 'superMan'
