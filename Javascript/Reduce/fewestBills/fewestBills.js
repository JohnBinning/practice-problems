const minimumBillCount = (value, availables) => {
  const sorted = availables.sort((a,b) => b - a);
  const bills = sorted.reduce((acc, billValue) => {
    const thisBillTotal = Math.floor(acc.remaining / billValue);
    acc.remaining -= thisBillTotal * billValue;
    acc.total += thisBillTotal;
    return acc;
  },{ remaining: value, total: 0 })
  return bills.total;
}