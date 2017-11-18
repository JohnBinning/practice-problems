const validPass = (password) => {
  if(password.length <= 3 || password.length >= 20) return 'INVALID';
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  const nums = '0123456789';
  
  const noSpecial = password.split('').filter((char) => (alph + nums).includes(char));
  if(noSpecial.length !== password.length) return 'INVALID';
  const containsAlph = password.split('').find((char) => alph.includes(char.toLowerCase()));
  const containsNum = password.split('').find((char) => nums.includes(char));
  if(!containsAlph || !containsNum) return 'INVALID';
  
  return 'VALID';
}