type deepCloneType =
  | { [key: string]: deepCloneType }
  | deepCloneType[]
  | number
  | string;

function deepClone(obj: deepCloneType): deepCloneType {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const isArray = Array.isArray(obj);
  const clone = isArray ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
      (clone as { [key: string]: deepCloneType })[key] = deepClone(
        (obj as { [key: string]: deepCloneType })[key]
      );
    }
  }
  return clone as deepCloneType;
}

const original: deepCloneType = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy: deepCloneType = deepClone(original);

if (typeof copy === 'object' && copy !== null && 'b' in copy) {
  console.log(original !== copy);
  console.log(original.b !== copy.b);
  console.log(original.d !== copy.d);
}
