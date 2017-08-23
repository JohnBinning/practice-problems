list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

function list(names){
  var namesArr = [];
  names.map((name) => {
    namesArr.push(name.name) 
  })
    if (namesArr.length === 1) {
      return namesArr[0];
    } else if (namesArr.length >= 2){
    for (let i = 0; i < namesArr.length-2; i++) {
      namesArr[i] = (namesArr[i] + ',');
  }
  namesArr.splice(namesArr.length-1, 0, "&")
  return namesArr.join(' ');
  }  else {
      return '';
    }
};