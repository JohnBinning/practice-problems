class BookKeeping
  VERSION = 6
end

class Gigasecond
  def self.from(time)
    time + 1_000_000_000
  end
end

