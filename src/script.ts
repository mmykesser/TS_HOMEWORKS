function reverseArray<T>(arr: T[]): T[] {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    const mix: T = arr[left];
    arr[left] = arr[right];
    arr[right] = mix;

    left++;
    right--;
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5];
const reversedArr = reverseArray(arr);
console.log(reversedArr);
console.log(reversedArr === arr);
