async function myPromise(success = true) {
  if (success) {
    return "Work Completed"; // 성공 시 결과 전달
    // return Promise.resolve("Work Completed");
  }
  return Promise.reject("Work Failed"); // 실패 시 에러 메시지 전달
}

async function test() {
  console.log("1. start");
  let result = await myPromise()
  .then(result => {
    console.log("3. 성공:", result);
  }).catch(error => {
    console.error("3. 실패:", error);
  }).then(() => {
    console.log("4. Promise 처리 완료");
  });
  console.log("5. end");

  return result;
};

test().then(() => {
  console.log("6. test 함수 완료");
}).catch(error => {
  console.error("6. test 함수 에러:", error);
});

console.log("2. js completed");


