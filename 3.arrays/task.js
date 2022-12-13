function compareArrays(arr1, arr2) {
  let result = compareArrays.every((arr1, arr2) => arr1.length === arr2.length);
  return result; // boolean
}
compareArrays([8, 9], [6]);

function advancedFilter(arr) {
  let resultArr = arr.filter(number => number > 0 ).filter(number => number % 3 == 0).map(number * 10)
  return resultArr; // array
}
