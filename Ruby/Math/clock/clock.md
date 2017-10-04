### Directions:

Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to miliseconds.

#### Examples:

Test.assert_equals(past(0,1,1),61000)
Test.assert_equals(past(1,1,1),3661000)
Test.assert_equals(past(0,0,0),0)
Test.assert_equals(past(1,0,1),3601000)
Test.assert_equals(past(1,0,0),3600000)