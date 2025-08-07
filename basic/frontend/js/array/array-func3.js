
let base=[1, [2, [3, 4]], 5];

// Stream 처리 구조
let result = [...base]
  .flat(3) // 중첩 배열을 평탄화
  .flatMap(el => el + 2) // 각 요소를 2배로 변환

console.log("Starting stream processing...");
console.log("Stream result: ", result); // 12 (2 * 2 + 4 * 2)

result = [...base]
  .flat(3)
  .flatMap(el => el + 2)  // 3, 4, 5, 6, 7
  .filter(el => el % 2 === 0) // 4, 6
  .map(el => el * 2) // 8, 12
  .reduce((acc, el) => acc + el, 0); // 20

console.log("Stream result: ", result); 
