const arr1 = [1,2,3,4,5];
const arr2 = new Array(5).fill(0);
const arr3 = Array.of(...arr1);
const arr4 = Array.from(arr3);
const arr5 = [...arr4];

console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // [0, 0, 0, 0, 0]
console.log(arr3); // [1, 2, 3, 4, 5]
console.log(arr4); // [1, 2, 3, 4, 5]
console.log(arr5); // [1, 2, 3, 4, 5]

const arr6 = [];
arr6.push("hello", "skala", "world");
console.log(arr6); // ["hello", "skala", "world"]

const arr7 = [];
for (let i = 0; i < 5; i++) {
    arr7[i] = i;
}
arr7.push(10);
arr7.push(11);
console.log(arr7); // [0, 1, 2, 3, 4, 10, 11]
