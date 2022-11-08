function compareArrays(arr1, arr2) {
  let result = compareArrays.every((array) => sum === sum2);

  function sumArray1() {
    for (let element of arr1) {
      let sum;
      sum += arr1[element];
      break;
    }
    return sum;
  }
  
  function sumArray2() {
    for (let element of arr2) {
      let sum2;
      sum2 += arr2[element];
      break;
    }
    return sum2;
  }
  
  return result; // boolean
}
compareArrays([8, 9], [6]);

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(number => number > 0 ).filter(number => number % 3 == 0).map(number * 10)

  return resultArr; // array
}
