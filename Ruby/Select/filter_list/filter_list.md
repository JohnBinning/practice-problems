### Directions:

filter a list of numbers and strings to return only numbers

### Examples:

```ruby
Test.assert_equals(filter_list([1,2,'a','b']),[1,2])
Test.assert_equals(filter_list([1,'a','b',0,15]),[1,0,15])
Test.assert_equals(filter_list([1,2,'aasf','1','123',123]),[1,2,123])
```