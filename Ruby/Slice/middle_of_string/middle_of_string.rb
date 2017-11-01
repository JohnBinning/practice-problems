def get_middle(s)
  return s.slice(s.length / 2 - 1,  2 ) if (s.length % 2 == 0)
  s[s.length / 2]
end