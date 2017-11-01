def find_dup(arr)
  arr.find{ |c| arr.count(c) > 1 }
end

# or

def find_dup(arr)
  arr.detect {|e| arr.count(e) > 1}
end