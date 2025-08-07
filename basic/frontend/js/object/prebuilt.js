//[ Date : 날짜와 시간 처리 ]
const now = new Date();
console.log(now.toISOString()); // 현재 시간을 ISO 형식으로 출력

const specificDate = new Date("2025-01-01");
console.log(specificDate.getFullYear()); // 2025
console.log(specificDate.getMonth());    // 0 (1월, 0부터 시작)


//[ Math :  수학 계산 ]
console.log(Math.PI);             // 3.141592653589793
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.sqrt(16));       // 4
console.log(Math.random());       // 0과 1 사이의 난수
console.log(Math.floor(3.7));     // 3 (내림)
console.log(Math.ceil(3.2));      // 4 (올림)

//[ RegExp :  정규식 ]
const regex = /hello/i; // 대소문자 구분 없이 "hello"를 찾는 정규식
console.log(regex.test("Hello World")); // true
console.log("Hello World".match(regex)); // ["Hello"]


//[ 6자리 숫자 랜덤값 구하기]
const getRandomSixDigitNumber = () => {
  return Math.floor(100000 + Math.random() * 900000); // 100000 이상 999999 이하
};
console.log(getRandomSixDigitNumber()); // 예: 374829
