const printerError = (s) => {
    const denom = s.length;
    const num = s.split('').filter( letter => {
      return letter > 'm';
    }).length
    return `${num}/${denom}`;
}

const str = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

printerError(str); // => 3/56