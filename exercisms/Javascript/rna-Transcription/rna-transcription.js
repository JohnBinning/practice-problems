class DnaTranscriber  {
  constructor() {
    this.toRna = toRna;
  }
};

const toRna = (str) => {
  const validChars = ['A', 'C', 'G', 'T'];
  
  return str.split('').map((letter) => {
    if(!validChars.includes(letter)) {
      throw "Invalid input";
    }
    return rnaMap[letter];
  }).join('');
}

const rnaMap = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

module.exports = DnaTranscriber;