// Symbol is a unique and immutable primitive value
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false
/*
  객체의 key는 항상 문자열이어야 합니다.
  하지만, Symbol은 문자열이 아니기 때문에 []을 사용하여 객체의 key로 사용할 수 있습니다.
*/
const syms = {
  [sym1]: 1234,
  [sym2]: 5678
};
console.log(syms[sym1]); // 1234
console.log(syms[sym2]); // 5678  

let user = {
  [sym1]: 1234
};
console.log(user);


// Symbol.for()를 사용한 심볼 공유
// Symbol.for()는 전역 심볼 레지스트리를 사용하여 심볼을 공유할 수 있게 해줍니다.
// 이는 여러 프로그램이나 파일 간에 동일한 심볼을 참조할 수 있게 합니다.
const shared = Symbol.for("shared-key");
const obj = { [shared]: "shared-value" };

// 프로그램 B 또는 다른 파일
const again = Symbol.for("shared-key");
console.log(obj[again]); // "value"
