const sym = Symbol("secret");

const obj = {
  name: "철수",
  age: 20,
  [sym]: "비밀",
};

Object.defineProperty(obj, "hidden", {
  value: "숨김",
  enumerable: false
});

console.log("=== for...in 결과 ===");
for (const key in obj) {
  console.log(key); // name, age (✔), but NOT hidden or Symbol
}
