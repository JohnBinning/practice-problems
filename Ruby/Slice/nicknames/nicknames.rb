def nickname_generator(name)
  return "Error: Name too short" if (name.length < 4)
  vowels = 'aeiou'
  return name.chars.slice(0, 3).join('') unless (vowels.include?(name[2]))
  name.chars.slice(0, 4).join('')
end

# or

def nickname_generator(name)
  return "Error: Name too short" if name.size < 4

  if name[2] =~ /[aeiou]/
    name[0..3]
  else
    name[0..2]
  end
end