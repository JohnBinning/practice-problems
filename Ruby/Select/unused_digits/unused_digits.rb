def unused_digits(*num)
  dig = '0123456789'
  arr = Array(num).join('')
  dig.split('').select {|a| !arr.include?(a)}.join('')
end