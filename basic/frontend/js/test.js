const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 2, e: { e1: 1, f: 2 } };
console.log(obj2); // { c: 1, d: 2, e: { e1: 1, f: 2 } }

Object.assign(obj1, obj2);
console.log(obj1); // { a: 1, b: 2, c: 1, d: 2, e: { e1: 1, f: 2 } }