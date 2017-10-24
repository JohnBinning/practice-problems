def getCount(str)
  str.downcase.count('aeiou')
end

# refactored from 

def getCount(str)
  vowels = 'aeiou'
  num = 0
  str.split('').each { |char| num += 1 if vowels.include?(char) }
  num
end