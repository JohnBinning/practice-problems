### Directions:

You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"]
dup(["kelless","keenness"]) = ["keles","kenes"]

Strings will be alphabet characters only. Don't worry about lower and upper case.

### Examples:

```javascript
Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
Test.assertDeepEquals(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
Test.assertDeepEquals(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
Test.assertDeepEquals(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
Test.assertDeepEquals(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);
```