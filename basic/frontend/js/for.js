console.log("Array ##########");
let arr = [10, 20, 30];
arr.forEach((value, index, array) => {
  console.log (value, index, array);
});


console.log("map ##########");
let map = new Map();
map.set("name", "홍길동");
map.set("age", 30);
map.set("city", "서울");
console.log("forEach ----------");
map.forEach((value, key) => {
    console.log(value, key);
});
console.log("for of ----------");
for (let [key, value] of map) {
    console.log(key, ": ", value);
}

for (let key in map.keys()) {
    console.log(key);
}

let obj = {
    name: "홍길동",
    age: 30,
    city: "서울"
};
console.log("object ##########");
console.log("for in object ----------");
Object.entries(obj).forEach(([key, value]) => {
    console.log(value, key);
});

console.log("for in object ----------");
for (let key in obj) {
    console.log(obj[key], key);
}

console.log("for of object ----------");
for (let [key, value] of Object.entries(obj)) {
    console.log(value, key);
}


