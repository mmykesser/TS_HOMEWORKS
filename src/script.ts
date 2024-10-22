const numbers: number[] = [1, 2, 35, 8, 98, 71, 25];

function calculation(numbers: number[]) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}

const result: number = calculation(numbers);

console.log(result.toFixed(1));
