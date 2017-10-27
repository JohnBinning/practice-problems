const zero = (a) => {
  if(!a) return 0;
  return eval(`0 ${a}`);
}
const one = (a) => {
  if(!a) return 1;
  return eval(`1 ${a}`);
}
const two = (a) => {
  if(!a) return 2;
  return eval(`2 ${a}`);
}
const three = (a) => {
  if(!a) return 3;
  return eval(`3 ${a}`);
}
const four = (a) => {
  if(!a) return 4;
  return eval(`4 ${a}`);
}
const five = (a) => {
  if(!a) return 5;
  return a(5)
}
const six = (a) => {
  if(!a) return 6;
  return eval(`6 ${a}`);
}
const seven = (a) => {
  if(!a) return 7;
  return eval(`7 ${a}`);
}
const eight = (a) => {
  if(!a) return 8;
  return eval(`8 ${a}`);
}
const nine = (a) => {
  if(!a) return 9;
  return eval(`9 ${a}`);
}

const plus = (a) => {
  if(a !== undefined) return `+ ${a}`;
}
const minus = (a) => {
  if(a !== undefined) return `- ${a}`;
}
const times = (a) => {
  if(a !== undefined) return `* ${a}`;
}
const dividedBy = (a) => {
  if(a !== undefined) return `/ ${a}`;
}