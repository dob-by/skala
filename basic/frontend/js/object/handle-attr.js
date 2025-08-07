// attribute를 추가하는 방법
const person = {
  name: "홍길동",
  age: 25,
};

person.gender = "M";
person["hobby"] = "검술";

let address = "address";
person[address] = "sku-tower";
console.log(person);


// attribute를 제거하는 방법
delete person.age;
delete person[address];
console.log(person);