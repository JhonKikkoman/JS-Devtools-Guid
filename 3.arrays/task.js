function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let result = compareArrays.every((element, index) => arr1[element] === arr2[element] && arr1[index] === arr2[index]);
    return result; // boolean
  }
}
compareArrays([8, 9], [6]);

function advancedFilter(arr) {
  let resultArr = arr.filter(number => number > 0 ).filter(number => number % 3 == 0).map(number => number * 10)
  return resultArr; // array
}
