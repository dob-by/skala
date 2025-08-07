const myIterable = {
  data: {
    a: 1,
    b: 2,
    c: 3
  },

  [Symbol.iterator]() {
    const entries = Object.entries(this.data); // [['a',1], ['b',2], ['c',3]]
    let index = 0;

    return {
      next() {
        if (index < entries.length) {
          const [key, value] = entries[index++];
          return { value: { key, value }, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

const iter = myIterable[Symbol.iterator]();
console.log(iter.next()); // { value: { key: 'a', value: 1 }, done: false }
console.log(iter.next()); // { value: { key: 'b', value: 2 }, done: false }
console.log(iter.next()); // { value: { key: 'c', value: 3 }, done: false }
console.log(iter.next()); // { done: true }


for (const item of myIterable) {
  console.log(item);
}
// 출력:
// { key: 'a', value: 1 }
// { key: 'b', value: 2 }
// { key: 'c', value: 3 }
