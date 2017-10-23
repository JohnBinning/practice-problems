def words_to_marks(str)
  alph = ('a'..'z').to_a
  str.chars.inject(0){ |total, letter| total + alph.index(letter) + 1 }
end

# Refactored from

# def words_to_marks(str)
#   alph = 'abcdefghijklmnopqrstuvwxyz'
#   num = 0
#   str.split('').each { |char| num += (alph.index(char) + 1) }
#   num
# end