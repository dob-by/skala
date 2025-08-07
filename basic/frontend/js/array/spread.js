const originalArray = [1, [2, 3], 4];

const shallowCopyArray = [...originalArray];

// 얕은 복사 확인: 최상위 요소는 독립적
shallowCopyArray[0] = 10;
console.log(originalArray[0]); // 1 (독립적)

// 중첩 배열은 참조를 공유
shallowCopyArray[1][0] = 20;
console.log(originalArray[1][0]); // 20 (원본도 영향을 받음)
