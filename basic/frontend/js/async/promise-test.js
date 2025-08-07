const DB = [];

function saveDB(user) {
  console.log("saveDB called");
  const oldDBSize = DB.length; // 수정됨
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    console.log("saveDB promise created");
    if (DB.length > oldDBSize) {
      console.log("resolve calling");
      resolve(user);
      console.log("resolve completed");
    } else {
      reject(new Error("Save DB Error!"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch(error => {
      console.error("에러 발생:", error.message);
      // 에러를 계속 전달하려면 다음 줄 추가:
      // throw error;
    })
    .finally(() => console.log("완료!"));
  console.log(result); // pending Promise
  return result;
}

const myUser = { email: "andy@test.com", password: "1234", name: "andy" };

console.log("1. 회원 가입 시작...");
const result = registerByPromise(myUser);
console.log("2. 회원 가입 요청 보냄...");
result.then(console.log); // 성공 시 메시지 출력
console.log("3. 회원 가입 요청 보낸 후...");

