function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  min = arr[0];
  max = arr[0];
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function worker(arr) {
  let sum = 0;
    for (let i = 0; i < arr.length; i += 1){
    sum += arr[i];
  }
  return (sum = calc);
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i += 1) {
    let calc = func(arrOfArr[i]);
    if (calc > max) {
      max = calc;
    }
  }
  return max;
}

function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return Math.abs(max - min);
}
