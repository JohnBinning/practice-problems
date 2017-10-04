def clock(h, m, s)
  sec = s * 1000
  min = m * 60000
  hour = h * 3600000
  sec + min + hour
end

Test.assert_equals(past(0,1,1),61000)
Test.assert_equals(past(1,1,1),3661000)
Test.assert_equals(past(0,0,0),0)
Test.assert_equals(past(1,0,1),3601000)
Test.assert_equals(past(1,0,0),3600000)