//Reflect.ownKeys(obj) returns all keys including non-enumerable and symbols
// Symbol 키 정의
const symKey = Symbol("secret");

// 객체 정의 (일반 키 + Symbol 키 + 중첩 객체 포함)
const person = {
  name: "홍길동",
  age: 30,
  address: {
    city: "서울",
    zip: "12345"
  },
  [symKey]: "비밀코드"
};
console.log("=== Reflect.ownKeys 결과 ===");
const keys = Reflect.ownKeys(person);
for (const key of keys) {
  console.log(key, person[key]); // name, age, address, Symbol(secret)
}