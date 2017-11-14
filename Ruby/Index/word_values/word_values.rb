def wordValue(arr)
  alphabet = ' abcdefghijklmnopqrstuvwxyz'
  arr.each_with_index.map do |word, i|
    count = 0
    word.chars.each do |char| 
      count += alphabet.index(char)
    end
    count * (i + 1)
  end
end