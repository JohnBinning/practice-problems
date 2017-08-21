function Hamming(){}

Hamming.prototype.compute = function(first, second){
  var differences = 0;
  if (first.length !== second.length) throw "DNA strands must be of equal length."
  else {
    first.split('').forEach(function(val, i){
      if (val !== second[i]) differences++;
    })
    return differences;
  }
}

module.exports = Hamming;
