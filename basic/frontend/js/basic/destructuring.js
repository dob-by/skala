//1. Object Desctructuring
const user = { myname: "철수", age: 20 };

// 기본 방식
const myName = user.myname;
const myAge = user.age;

// 비구조화 방식
const { myname, age } = user;
console.log(myname); // "철수"
console.log(age);  // 20


//2. 함수 매개변수에 비구조화 할당
function printUser({ myname, age }) {
  console.log(`${myname}은 ${age}살입니다.`);
}

printUser({ myname: "영희", age: 22 });

//3. 배열 비구조화 할당
const colors = ["red", "green", "blue"];

// 기본 방식
const first = colors[0];
const second = colors[1];

// 비구조화 방식
const [firstColor, secondColor] = colors;
console.log(firstColor);  // "red"
console.log(secondColor); // "green"



