function mergeArrays(arr1, arr2) {
  const mergedArray = new Array(arr1.length + arr2.length);
  let idx = 0,
    a1 = 0,
    a2 = 0;

  while (a1 < arr1.length && a2 < arr2.length) {
    if (arr1[a1] <= arr2[a2]) {
      mergedArray[idx++] = arr1[a1++];
    } else {
      mergedArray[idx++] = arr2[a2++];
    }
  }

  while (a1 < arr1.length) mergedArray[idx++] = arr1[a1++];
  while (a2 < arr2.length) mergedArray[idx++] = arr2[a2++];

  return mergedArray;
}
