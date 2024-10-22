"use strict";
const numbers = [1, 2, 35, 8, 98, 71, 25];
function calculation(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum / numbers.length;
}
const result = calculation(numbers);
console.log(result.toFixed(1));
