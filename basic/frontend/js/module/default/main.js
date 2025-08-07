// default는 이름 자유롭게, 나머지는 {}로 정확히
import bar1, { foo } from './module.js';

bar1();       // 기본 함수 bar
console.log(foo); // hello
