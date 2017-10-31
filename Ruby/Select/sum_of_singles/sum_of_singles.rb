def repeats(arr)
  arr.select { |num| arr.count(num) == 1 }.reduce(:+)  
end