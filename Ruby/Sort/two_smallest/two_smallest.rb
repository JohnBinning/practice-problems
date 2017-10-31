def sum_two_smallest_numbers(numbers)
  numbers.min(2).reduce(:+)
end

# refactored from

def sum_two_smallest_numbers(numbers)
  sorted = numbers.sort()
  sorted[0] + sorted[1]
end