async function a() {
  console.log("a 시작");
  const promise = new Promise(resolve => setTimeout(() => resolve("완료"), 2000)); // 2초 대기
  console.log(promise);
  console.log("a 끝");
  return promise;
}

async function b() {
  console.log("b 시작");
  const result = await a().then(value => {
    console.log("a()로부터 받은 값:", value);
    return "b 완료";
  });
  console.log("b 끝");
}

b();
