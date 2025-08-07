function isKoreanName(name) {
  const koreanRegex = /^[가-힣]+$/;
  return koreanRegex.test(name);
}

// 테스트
console.log(isKoreanName("홍길동")); // true
console.log(isKoreanName("Tom")); // false
