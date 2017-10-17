### Directions:

Story

The robbers finally found the Ali Baba's home and decided to kill him tonight. They hid in some big buckets near the Ali Baba's home, waiting for the arrival of the night.

Careful Ali Baba found that there are abnormal conditions in the buckets. He did not panic, began to set up a fire, burning a lot of boiling water.

What is he going to do?

He put the kettle in his hand and lifted the lid of the bucket. If there is a robber in it, he will fill the bucket with water. Eventually, all the robbers were killed by the Ali Baba, and he lived happily ever after.

Descrption

Give you argument buckets. There may be robbers in the bucket(such as robber-A,robber-123,robber-xyz), or something else(any string does not starting with robber-), or nothing(an empty string ""). You need to help the Alibaba to fill up all the bucket of robbers.

### Examples:

```javascript
let buckets = ["stone","robber-Superman","robber-Smile67","robber-Zozo","stone","grass","iamnotarobber-tortoise",""]
let answer = 
["stone","robber-Supermanwaterwaterwater","robber-Smile67waterwaterwaterw","robber-Zozowaterwaterwaterwate","stone","grass","iamnotarobber-tortoise","","50 litres"]
Test.assertSimilar(fillWater(buckets),answer);

buckets = ["robber-Awaterwaterwaterwaterwa","robber-123waterwaterwaterwater",
answer = "robber-xyzwaterwaterwaterwater","stone","grass","tortoise","","62 litres"]
Test.assertSimilar(fillWater(buckets),answer);

Test.assertSimilar(fillWater([]),["0 litre"]);
```
