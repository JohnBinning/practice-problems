def filter_list(list)
  list.select { |char| char.class == Fixnum }
end

# or

def filter_list(list)
  list.select { |char| char.is_a? Numeric }
end

# or

def filter_list(list)
  list.keep_if { |i| i.is_a? Integer }
end