function findSum(arr, value) {
  const hash = {};

  for (const el of arr) {
    if (hash[value - el]) return [el, value - el];
    else hash[el] = true;
  }
  return false;
}
