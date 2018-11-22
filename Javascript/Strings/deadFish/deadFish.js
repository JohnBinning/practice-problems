function parse(data) {
  let count = 0;
  const retVal = [];
  for (let i = 0; i < data.length; i++) {
    switch(data[i]) {
      case 'i':
        count += 1;
        break;
      case 'd':
        count -= 1;
        break;
      case 's':
        count **= 2;
        break;
      case 'o':
        retVal.push(count);
        break;
      default:
        break;
    }
  }
  return retVal;
}


const map = {
  'i' : function(x){return x + 1;},
  'd' : function(x){return x - 1;},
  's' : function(x){return x * x;}
}

function parse( data ) {
  const retVal = [], count = 0;
  data.split('').forEach(function(x){
    if (x === 'o') {
      retVal.push(count); 
    } else {
      count = map[x](count);
    }
  });
  return retVal;
}