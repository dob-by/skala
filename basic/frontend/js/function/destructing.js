// [ 객체 비구조화 ]
function buildObject(name, age) {
    return { name, age };
}
const { name } = buildObject("홍길동", 25);
console.log(name);



// [ 배열 비구조화 ]
function buildArray(a, b, c) {
    return [a, b, c];
}
const [ , second, ] = buildArray(10, 20, 30)
console.log(second);

// [ 함수 매개변수 비구조화 ]
function printUser({ name, age }) {
  console.log(name, age);
}
printUser({ name: "철수", age: 30 });

let user = {
    name: "영희",
    city: "서울",
    age: 25
}
printUser(user);