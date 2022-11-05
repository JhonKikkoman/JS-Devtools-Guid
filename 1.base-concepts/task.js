function solveEquation(a, b, c) {
  let arr = [];
  "use strict";
  const d = (b ** 2 - 4 * a * c);
  
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
   let d2 = (-b/(2*a));
   arr.push(d2);
  } else if (d > 0) {
    let d3 = ((-b + Math.sqrt(d) )/(2*a));
    let d4 = ((-b - Math.sqrt(d) )/(2*a));
    arr.push(d3, d4);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  "use strict";

  let bodyMortgage = amount - contribution;

  let payment = bodyMortgage * (P + (P / (((1 + P) ** n) - 1)));
  totalAmount

  return totalAmount;
}
