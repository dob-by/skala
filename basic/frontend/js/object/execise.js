const realHong = {
  name: "홍길동",
  age: 25,
  job: "의적",
  skills: ["검술", "전략", "분신"],
  shadow: {
    color: "검은색"
  }
};

// 분신 기술 제거 + shadow 속성 제거
const fakeHong = {
  ...realHong,
  skills: realHong.skills.filter(skill => skill !== "분신")
};
delete fakeHong.shadow;

console.log("진짜 홍길도:", realHong);
console.log("가짜 홍길도:", fakeHong);
