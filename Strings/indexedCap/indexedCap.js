const capitalize = (s,arr) => {
  return s.split('').map( (letter, i) => {
    return arr.includes(i) ? letter.toUpperCase() : letter;
  }).join('');
};

Test.assertDeepEquals(capitalize("abcdef",[1,2,5]),'aBCdeF');
Test.assertDeepEquals(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
Test.assertDeepEquals(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
Test.assertDeepEquals(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
Test.assertDeepEquals(capitalize("codewarriors",[5]),'codewArriors');
Test.assertDeepEquals(capitalize("indexinglessons",[0]),'Indexinglessons');