// some: 배열 요소 중 하나라도 조건을 만족하면 true 반환
let arrSome = [1, 2, 3];
let hasEven = arrSome.some(el => el % 2 === 0);
console.log("some:", hasEven); // true

// every: 배열 모든 요소가 조건을 만족하면 true 반환
let arrEvery = [2, 4, 6];
let allEven = arrEvery.every(el => el % 2 === 0);
console.log("every:", allEven); // true

// includes: 배열에 특정 값이 포함되어 있는지 확인
let arrIncludes = [1, 2, 3];
let hasTwo = arrIncludes.includes(2);
console.log("includes:", hasTwo); // true

// indexOf: 특정 값의 첫 번째 인덱스 반환
let arrIndexOf = [1, 2, 3, 2];
let index = arrIndexOf.indexOf(2);
console.log("indexOf:", index); // 1

// lastIndexOf: 특정 값의 마지막 인덱스 반환
let arrLastIndexOf = [1, 2, 3, 2];
let lastIndex = arrLastIndexOf.lastIndexOf(2);
console.log("lastIndexOf:", lastIndex); // 3
