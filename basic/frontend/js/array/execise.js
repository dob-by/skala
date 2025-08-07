const foods = [
  "쌀",
  "보리",
  "콩",
  "감자",
  "양파",
  "마늘",
  "배추",
  "무",
  "고구마",
  "호박",
];

const poors = ["철수", "영희", "민수"];

const results = poors.map((name) => ({ name: name, items: [] }));

console.log("results:", results);

for (let i = 0; i < foods.length; i++) {
  results[i % poors.length].items.push(foods[i]);
}

console.table(results);
