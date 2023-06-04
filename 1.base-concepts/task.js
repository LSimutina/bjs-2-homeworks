"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1 = 0;
  let x2 = 0;
  
  let D = b ** 2 - 4 * a * c;

  if (D == 0) {
    x1 = -b / (2 * a);
    arr = arr.concat(x1);
  }

  if (D > 0) {
    x1 = (-b + Math.sqrt(D) )/(2*a);
    x2 = (-b - Math.sqrt(D) )/(2*a);
    arr = arr.concat(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMouth = percent / 100 / 12;
  let bodyLoan = amount - contribution;
  let payment = bodyLoan * (percentMouth + (percentMouth / (((1 +   percentMouth)**countMonths) - 1)));
  let totalAmount = (payment * countMonths).toFixed(2);

  return Number(totalAmount);
}