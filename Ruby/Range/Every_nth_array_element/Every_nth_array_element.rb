class Array
  def every(interval = 1, start_index = 0)
    (start_index...self.length).step(interval).map { |i| self[i] }
  end
end