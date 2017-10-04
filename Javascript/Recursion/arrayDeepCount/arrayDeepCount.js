const deepCount = (a) => {
  return a.reduce((acc, el) => {
    if (Array.isArray(el)) {
      acc += deepCount(el);
    }
    acc += 1;
    return acc;
  },0)
}

Test.assertEquals(deepCount([]), 0, "Expected 0")
Test.assertEquals(deepCount([1, 2, 3]), 3, "Expected 3")
Test.assertEquals(deepCount(["x", "y", ["z"]]), 4, "Expected 4")
Test.assertEquals(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7")
Test.assertEquals(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8")