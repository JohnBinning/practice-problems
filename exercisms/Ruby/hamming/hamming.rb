class BookKeeping
  VERSION = 3
end

class Hamming
  def self.compute(a, b)
    raise ArgumentError if a.length != b.length 
    arr_a = a.split('')
    arr_b = b.split('')
    counter = 0
    arr_a.each_with_index { |letter, i| counter += 1 if arr_b[i] != letter }
    counter
  end
end