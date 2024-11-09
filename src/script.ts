function myFilter<T>(array: T[], callback: (item: T) => boolean): T[] {
  const result: T[] = [];

  for (const item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

function filterByProperty<T, K extends keyof T>(
  array: T[],
  property: K,
  value: T[K]
): T[] {
  return myFilter(array, (item) => item[property] === value);
}

type User = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
};

const users: User[] = [
  { id: 1, name: 'Alice', age: 25, isActive: true },
  { id: 2, name: 'Bob', age: 30, isActive: false },
  { id: 3, name: 'Charlie', age: 35, isActive: true },
];

const activeUsers = filterByProperty(users, 'isActive', true);
const ageUser = filterByProperty(users, 'age', 30);

console.log(activeUsers);
console.log(ageUser);
