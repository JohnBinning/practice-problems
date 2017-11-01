def find_dup(arr)
  arr.find{ |c| arr.count(c) > 1 }
end