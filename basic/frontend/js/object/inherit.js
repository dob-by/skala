const person = {
  name: "홍길동",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
};

const child = Object.create(person);
child.greet(); // "Hello, my name is 홍길동, I am 25 years old."


child.name ="임꺽정";
child.age = 30;
child.greet(); // "Hello, my name is 임꺽정, I am 30 years old."

person.greet(); // "Hello, my name is 홍길동, I am 25 years old."

// 상속 여부 확인
console.log("child.hasOwnProperty('age'):", child.hasOwnProperty("age"));  // true
console.log("child.hasOwnProperty('greet'):", child.hasOwnProperty("greet"));  // false – 메서드 위임
