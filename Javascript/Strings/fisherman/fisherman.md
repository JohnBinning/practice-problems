### Directions:

John was a fisherman, living a very regular life. He always spent three days to go fishing, then rest for two days, for airing his fishing net. When he passed the three times fishing, he will use one day to sell his fish, and then airing his fishing net.

3 days fishing 
2 days airing net
3 days fishing
2 days airing net
3 days fishing
1 day selling fish
2 days airing net
3 days fishing 
...

Complete function fisherman. Function accept two arguments startDay and today(Two strings, representing the start time and the current time). Returns "Fishing" or "Airing net" or "Selling fish" according to what John is going to do today.

### Examples:

```javascript
Test.assertEquals(fisherman("2016-01-01","2016-01-01") , "Fishing"); 

Test.assertEquals(fisherman("2016-01-01","2016-01-02") , "Fishing"); 

Test.assertEquals(fisherman("2016-01-01","2016-01-03") , "Fishing"); 

Test.assertEquals(fisherman("2016-01-01","2016-01-04") , "Airing net"); 

Test.assertEquals(fisherman("2016-01-01","2016-01-05") , "Airing net"); 

Test.assertEquals(fisherman("2016-01-01","2016-01-14") , "Selling fish");

Test.assertEquals(fisherman("2016-01-01","2016-01-16") , "Airing net"); 

Test.assertEquals(fisherman("2016-01-01","2017-01-01") , "Airing net"); 

```