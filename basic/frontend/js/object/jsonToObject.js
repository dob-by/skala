const person = {
  name: "홍길동",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
};

// Convert the person object to a JSON string
const json = JSON.stringify(person)
console.log("JSON String:", json);


const obj = JSON.parse(json);
console.log("Parsed Object:", obj);

obj.greet2 = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

console.log("Greeting from Parsed Object:", obj);
obj.greet2(); // Call the greet2 method on the parsed object
