const person = {
  "full name": "홍길동",
  "actual-age": 25,
  "country": "대한민국",
};

console.log(person["full name"]);
console.log(person["actual-age"]);

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
} 
let country = "country";
console.log(person[country]);
