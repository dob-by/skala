// push: 배열 끝에 요소 추가
let arrPush = [1, 2];
arrPush.push(3);
console.log("push:", arrPush); // [1, 2, 3]

// pop: 배열 마지막 요소 제거
let arrPop = [1, 2, 3];
let last = arrPop.pop();
console.log("pop:", last, arrPop); // 3, [1, 2]

// shift: 배열 첫 번째 요소 제거
let arrShift = [1, 2, 3];
let first = arrShift.shift();
console.log("shift:", first, arrShift); // 1, [2, 3]

// unshift: 배열 앞에 요소 추가
let arrUnshift = [2, 3];
arrUnshift.unshift(1);
console.log("unshift:", arrUnshift); // [1, 2, 3]
