// 1. 배열
const fruits = ["사과", "바나나", "포도"];
console.log("=== 배열 ===");
for (const fruit of fruits) {
  console.log(fruit);
}

// 2. 문자열
const greeting = "Hi!";
console.log("\n=== 문자열 ===");
for (const char of greeting) {
  console.log(char);
}

// 3. Map
const userMap = new Map([
  ["name", "철수"],
  ["age", 30]
]);
console.log("\n=== Map ===");
for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}

// 4. Set
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);
console.log("\n=== Set ===");
for (const num of uniqueNumbers) {
  console.log(num);
}
