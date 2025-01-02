const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // { a: 1, b: 2 }
console.log(copiedObject === originalObject); // false (다른 객체)
console.log(originalObject.a);
