/**
 * 입력된 문자열이 한글 이름 형식인지 확인합니다.
 * @param {string} name - 확인할 이름 문자열
 * @returns {boolean} - 한글 이름이면 true, 아니면 false
 */
const isKoreanName = (name) => {
  // 정규식: 시작부터 끝까지 한글 자음/모음(가-힣)으로만 구성된 2~5글자
  const koreanNameRegex = /^[가-힣]{2,5}$/;
  return koreanNameRegex.test(name);
};

console.log(isKoreanName("홍길동")); // true
console.log(isKoreanName("김")); // true
console.log(isKoreanName("이순신")); // true
console.log(isKoreanName("John Doe")); // false
console.log(isKoreanName("12345")); // false
console.log(isKoreanName("")); // false