def solve(arr)
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  arr.map do |word|
    count = 0
    word.chars.each_with_index { |char, i| count += 1 if (char.downcase == alphabet[i]) }
    count
  end
end