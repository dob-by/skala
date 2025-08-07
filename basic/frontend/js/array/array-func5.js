let base=[1,3,5,4,6,6,2,8,7,9,10];

let arr1 = [...base]; // 오름 차순
arr1.sort((a, b) => a - b);
console.log("arr1 sorted in ascending order: ", arr1);

let arr2 = [...base]; // 내림 차순
arr2.sort((a, b) => b - a);
console.log("arr2 sorted in descending order: ", arr2);

let str = ["apple", "banana", "cherry", "date"]; // 문자열 오름 차순
str.sort();
console.log("str sorted in lexicographical order: ", str);

let str2 = ["apple", "banana", "cherry", "date"]; // 문자열 내림 차순
str2.sort((a, b) => b.localeCompare(a));
console.log("str2 sorted in reverse lexicographical order: ", str2);