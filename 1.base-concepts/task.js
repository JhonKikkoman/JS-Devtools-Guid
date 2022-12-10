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

  if (isNaN(percent) === true) {
    return `Параметр "Процент" содержит неправильное значение "${percent}"`
  } else if (isNaN(contribution) === true) {
    return `Параметр "Первоначальный взнос" содержит неправильное значение "${contribution}"`
  } else if (isNaN(amount) === true) {
    return `Параметр "Сумма кредита" содержит неправильное значение "${amount}"`
  } else if (isNaN(date) === true) { 
    return `Параметр "Дата" содержит неправильное значение "${date}"`
  }

  let bodyMortgage = amount - contribution;

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let diffYear = date.getFullYear() - currentYear;
  let countMonth = (diffYear * 12) - currentMonth + date;

  let payment = bodyMortgage * ((percent / 100) + (percent / 100) / (((1 + percent / 100)) ** countMonth) - 1);
  
  return (totalAmount = Number(payment.toFixed(2)));
}
