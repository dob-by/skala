class Person {
    #name;
    #age;
  // 생성자 (Java의 constructor와 유사)
  constructor(name, age, value) {
    this.#name = name;
    this.#age = age;
    this.value = value;
  }

  // 메서드 (Java의 인스턴스 메서드와 유사)
  greet() {
    console.log(`안녕하세요, 제 이름은 ${this.#name}이고, 나이는 ${this.#age}살입니다.`);
  }

  // getter (Java의 getName() 같은 메서드)
  getName() {
    return this.#name;
  }

  // setter (Java의 setName(String name) 같은 메서드)
  setName(newName) {
    this.#name = newName;
  }

  get nameUpperCase() {
    return this.#name.toUpperCase();
  }

  set count(value) {
    this.value = value;
  }

}

const person = new Person("홍길동", 30, 100);
person.greet(); // "안녕하세요, 제 이름은 홍길동이고, 나이는
// 30살입니다."
console.log(person.getName()); // "홍길동"
person.setName("이순신");
console.log(person.getName()); // "이순신"
console.log(person.nameUpperCase); // "이순신"
person.count = 200;
console.log(person.value); // 200
