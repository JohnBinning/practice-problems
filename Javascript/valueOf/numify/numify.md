### Directions:

Write

```javascript
function Word2Num(str);
```

that takes in a str from one to ten and allows us to do the following:

```javascript
Word2Num("one") + Word2Num("two") + Word2Num("three") === 6;

const arr = [Word2Num("seven"), Word2Num("eight")];
arr.join() === 'seven,eight';

arr.sort((a,b)=> b-a).join() === 'eight,seven';
```

### Examples:

```javascript
let ans = Word2Num("one") + Word2Num("two") + Word2Num("three");
Test.assertEquals(ans, 6);
ans = Word2Num("four") + Word2Num("five") + Word2Num("six");
Test.assertEquals(ans, 15);
ans = Word2Num("seven") + Word2Num("eight") + Word2Num("nine") + Word2Num("ten");
Test.assertEquals(ans, 34);
let arr = [Word2Num("seven"), Word2Num("eight"), Word2Num("nine"), Word2Num("ten")];
let str = arr.join();
Test.assertEquals(str, 'seven,eight,nine,ten');
arr.push(Word2Num("one"), Word2Num("five"));
arr.sort((a, b) => b - a);
str = arr.join();
Test.assertEquals(str, 'ten,nine,eight,seven,five,one');
```