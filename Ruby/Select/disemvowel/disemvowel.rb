def disemvowel(str)
  str.delete('aeiouAEIOU')
end

# refactored from

def disemvowel(str)
  vowels = 'aeiouAEIOU'
  str.chars.select { |letter| !vowels.include?(letter) }.join('')
end