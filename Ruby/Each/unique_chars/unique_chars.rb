def unique(integers)
  snowflakes = []
  integers.each { |int| snowflakes.push(int) unless snowflakes.include?(int) }
  snowflakes
end