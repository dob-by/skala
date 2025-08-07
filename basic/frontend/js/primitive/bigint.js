
// [형식 변형]
let big = 1234567890123456789012345678901234567890n;
let small = 10;
let sum;

console.log("Type of small:", typeof small); // Type of small: bigint
console.log("Type of big:", typeof big); // Type of big: bigint
console.log("Type of sum:", typeof sum); // Type of sum: bigint

console.log ("잘못된 덧셈 연산: "); // 잘못된 덧셈 연산: 1234567890123456789012345678912345677900n
sum = big + small;
console.log("sum: ", sum, "  type: ", typeof sum); // BigInt sum: 1234567890123456789012345678912345677900n