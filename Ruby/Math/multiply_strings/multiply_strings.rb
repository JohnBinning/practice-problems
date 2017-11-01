def arrMultiply(arr)
  num = arr[0].to_i * arr[1].to_i 
  num.to_s
end

# or

def arrMultiply(arr)
  (arr[0].to_i * arr[1].to_i).to_s
end