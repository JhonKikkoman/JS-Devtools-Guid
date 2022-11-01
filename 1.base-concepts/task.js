function solveEquation(a, b, c) {
  let arr;
  "use strict";
  const d = (b ** 2 - 4 * a * c);
  let root1;
  let root2;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
   let root1 = (-b/(2*a));
   let calcD = (d - root1);
   arr.push(calcD);
  // } else if (d > 0) {

  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
