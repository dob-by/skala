// 두 개 이상의 배열을 결합하여 새 배열을 반환
let arr1 = [1, 2];
let arr2 = [3, 4]; 
let combined = arr1.concat(arr2); 
console.log(combined); // [1, 2, 3, 4]


// slice 메서드를 사용하여 배열의 일부를 추출
let arr3 = [1, 2, 3, 4, 5, 6]; 
let part = arr3.slice(2, 4); 
console.log(part); // [3, 4]

// splice 메서드를 사용하여 배열의 요소를 제거하거나 추가
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(1, 2, 4); 
console.log(arr4); // [1, 4, 4, 5]

