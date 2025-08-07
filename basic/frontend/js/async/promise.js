const myPromise = new Promise((resolve, reject) => {
  const success = true; // 예시: 비동기 작업 성공 여부

  setTimeout(() => {
    if (success) {
      resolve("작업이 성공했습니다!"); // 성공 시 결과 전달
    } else {
      reject("작업이 실패했습니다."); // 실패 시 에러 메시지 전달
    }
  }, 3000); // 1초 후에 결과 반환 (비동기 처리 시뮬레이션)
});

// 결과 처리
myPromise
  .then(result => {
    console.log("성공:", result);
  })
  .catch(error => {
    console.error("실패:", error);
  });
