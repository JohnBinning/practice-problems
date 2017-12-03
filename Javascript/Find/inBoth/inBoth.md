### Directions:

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

### Examples:

```javascript
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

let a1 = ["xyz", "live", "strong"];
Test.assertSimilar(inArray(a1, a2), ["live", "strong"]);
a1 = ["live", "strong", "arp"];
Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"]);
a1 = ["tarp", "mice", "bull"];
Test.assertSimilar(inArray(a1, a2), []);
```