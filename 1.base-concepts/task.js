function solveEquation(a, b, c) {
  let arr = [];
  "use strict";
  let d = (b ** 2 - 4 * a * c);
  let d2;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
   d = (-b/(2*a));
   arr.push(d);
  } else if (d > 0) {
    d = ((-b + Math.sqrt(d) )/(2*a));
    d2 = ((-b - Math.sqrt(d) )/(2*a));
    arr.push(d, d2);
    console.log(arr);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
