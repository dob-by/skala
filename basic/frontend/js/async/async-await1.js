async function test() {
  console.log("1. function start");
  await Promise.resolve();
  console.log("3. function end");
}

test();
console.log("2. js completed");

