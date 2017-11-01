def removeVowels(word)
  result = word.split('').select { |char| !'aeiouAEIOU'.include?(char) }.join('')
end

# or

def removeVowels(word)
  word.delete('aeiou')
end