def sentencify(words)
  first = words.shift
  first = first.capitalize unless first[0] == first[0].upcase
  words.unshift(first)
  words.join(" ") + "."
end

  Test.assert_equals(
    sentencify(["i", "am", "an", "AI"]), 
    "I am an AI.")

  Test.assert_equals(
    sentencify(["yes"]), 
    "Yes.")

  Test.assert_equals(
    sentencify(["FIELDS","of","CORN","are","to","be","sown"]),
    "FIELDS of CORN are to be sown.")