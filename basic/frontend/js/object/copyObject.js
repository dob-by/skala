const original = { 
    name: "홍길동", 
    age: 30,
    skills: ["검술", "분신"] 
};

// 얕은 복사 (Shallow Copy)
// 얕은 복사는 객체의 최상위 속성만 복사합니다.
const  shallowCopied = { ...original };
shallowCopied.skills.push("창던지기");
console.log("얕은 복사 결과:");
console.log(original.skills, shallowCopied.skills);

// 깊은 복사 (Deep Copy)
// 깊은 복사는 객체의 모든 중첩된 속성까지 복사합니다.
const deepCopied = JSON.parse(JSON.stringify(original));
deepCopied.skills.push("마법");
console.log("깊은 복사 결과:");
console.log(original.skills, deepCopied.skills);

// 깊은 복사 (Deep Copy) - Lodash 사용
// Lodash 라이브러리를 사용하여 깊은 복사를 수행할 수 있습니다.
import _ from 'lodash';
const lodashDeepCopied = _.cloneDeep(original);
lodashDeepCopied.skills.push("궁술");
console.log("Lodash 깊은 복사 결과:");
console.log(original.skills, lodashDeepCopied.skills);


