// Задание 1
function getArrayParams(...arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];

  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] > max) {
      max = arr[i];
      sum += max;
    } else if (arr[i] < min) {
      min = arr[i];
      sum += min;
    }
  }
  
  sum += arr[i];
  Number(avg) = (sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum;

  for (let i = 0; i < arr.length; i += 1){
    sum += arr[i];
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  func = worker();

  // Ваш кода
  for (let i = 0; i < arrOfArr.length; i += 1) {
    sum = func(arrOfArr[i]);
    if (func(arr) > max) {
      max = sum;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  min = arr[0];
  max = arr[0];

  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] > max) {
      max = arr[i];
      sum += max;
    } else if (arr[i] < min) {
      min = arr[i];
      sum += min;
    }
  }
  
  sum = max - min;

  return Math.abs(sum);
}
