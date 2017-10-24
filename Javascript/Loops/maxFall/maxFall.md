### Directions:

Uncle Tom the farmer needs to decide what vegetable he’ll grow this year. Since last year he barely covered costs due to a sudden fall in price for his cucumber, this year he has decided to check which vegetables prices had fallen the most during the previous years. Can you help Uncle Tom quantify the falls in price for each vegetable?

The fall in price from a given year will be judged by all subsequent years, for example

```javascript
[10, 1, 20, 14, 8 ]
```

will return 12 due to the drop from 20 to 8

### Examples:

```javascript
Test.assertEquals(maxFall([10, 11, 1, 11, 29, 10, 14, 20, 5, 1, 10]), 28);
Test.assertEquals(maxFall([50, 20, 10, 1, 60, 20, 25]), 49);
Test.assertEquals(maxFall([5, 3, 5, 6, 2, 6, 10, 30, 32, 20, 10, 1.1]), 30.9);
```