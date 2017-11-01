def high_and_low(numbers)
  spl = numbers.split(' ').minmax{ |a,b| 0 - a.to_i <=> 0 - b.to_i }.join(' ')
end