def nickname_generator(name)
  return "Error: Name too short" if (name.length < 4)
  vowels = 'aeiou'
  return name.chars.slice(0, 3).join('') unless (vowels.include?(name[2]))
  name.chars.slice(0, 4).join('')
end