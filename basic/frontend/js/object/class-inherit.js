class Person {
  #privateName; //#: private
  #privateAge;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.#privateName = name;
    this.#privateAge = age;
  }

  greet() {
    console.log("이것은 클래스");
    console.log(`공식적인 정보: ${this.name}, ${this.age}살`);
    console.log(`비공식적인 정보: ${this.#privateName}, ${this.#privateAge}살`);
  }
}

const user = new Person("홍길동", 30);
user.greet(); // 이것은 Class: 홍길동, 30살
console.log(`공식적인 정보: ${user.name}, ${user.age}살`);
//console.log(`비공식적인 정보: ${user.#privateName}, ${user.#privateAge}살`); // ❌ private 속성 접근 불가

// inheritance example
class Student extends Person {
  constructor(name, age, school, grade) {
    super(name, age); // 부모 클래스의 constructor 호출
    this.school = school;
    this.grade = grade;
  }

  introduce() {
    console.log(`저는 ${this.school}에 다니는 ${this.grade}학년 학생입니다.`);
    this.greet(); // 부모 클래스의 greet() 호출
  }
}

const student = new Student("임꺽정", 16, "서울고등학교", 2);

student.introduce();
// 출력:
// 저는 서울고등학교에 다니는 2학년 학생입니다.
// 이것은 클래스
// 공식적인 정보: 임꺽정, 16살
// 비공식적인 정보: 임꺽정, 16살

student.greet(); // 이것은 클래스: 임꺽정, 16살

console.log(`공식적인 정보: ${student.name}, ${student.age}살`);
// console.log(student.#privateName); // ❌ 오류: private 필드는 상속 클래스에서도 접근 불가
