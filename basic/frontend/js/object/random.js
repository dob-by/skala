const getRandomSixDigitNumber = () => {
  return Math.floor(100000 + Math.random() * 900000); // 100000 이상 999999 이하
};
console.log(getRandomSixDigitNumber()); // 예: 374829

const uuid = crypto.randomUUID();
console.log(uuid); // 예: "123e4567-e89b-12d3-a456-426614174000"