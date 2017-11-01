def no_repeat(string)
  string.chars.find{ |c| string.count(c) == 1 }
end

# Refactored from 

def no_repeat(str)
  repeats = {}
  answer = ''
  str.split('').each do |char|
    if (!repeats.include?(char))
      repeats[char] = 1
    else
      repeats[char] += 1
    end
  end
  repeats.keys.select {|e| repeats[e] == 1}.first
end