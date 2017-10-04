#first solution below
def cap_me(arr)
  ans = arr.map do |name| 
    n = name.split('').each_with_index.map do |letter, i|
      if i == 0
        letter.upcase
      else 
        letter.downcase
      end
    end
    n.join('')
  end
  ans
end

#then I realized ruby has capitalize

def cap_me(name)
  name.map { |letter| letter.downcase.capitalize }
end

cap_me(['jo', 'nelson', 'jurie']) # returns ['Jo', 'Nelson', 'Jurie']
cap_me(['KARLY', 'DANIEL', 'KELSEY']) # returns ['Karly', 'Daniel', 'Kelsey']