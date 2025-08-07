function createCounter(name, age) {
  let count = 0;         // private variable
  return {
    increment() {
      count++;
      console.log(`${name}의 카운트: ${count}`);
    },
    getCount() {
      return count;
    },
    greet() {
      console.log(`안녕하세요, ${name} (${age}세)입니다.`);
    }
  };
}

const counter = createCounter("홍길동", 30);
counter.greet();       // 안녕하세요, 홍길동 (30세)입니다.
counter.increment();   // 홍길동의 카운트: 1
counter.increment();   // 홍길동의 카운트: 2
console.log(counter.getCount()); // 2

//console.log(counter.name);       // ❌ undefined
//console.log(counter.count);      // ❌ undefined