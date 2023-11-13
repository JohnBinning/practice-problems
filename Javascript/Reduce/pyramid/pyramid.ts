function reducePyramid(base: number[]) {
  let newBase = [...base]
  while (newBase.length) {
    if (newBase.length === 1) return newBase[0]
    newBase = newBase.reduce((acc, val, i) => {
      if (i < newBase.length - 1) {
        acc.push(val + newBase[i + 1])
      }
      return acc
    }, [] as number[])
  }
}