const toCamelCase = (str) => {
  if (!str) return '';
  if (str.includes('-')) {
    return str.split('-').map((word, i) => {
      return i ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    }).join('');
  }
  if (str.includes('_')) {
    return str.split('_').map((word, i) => {
      return i ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    }).join('');
  }
}