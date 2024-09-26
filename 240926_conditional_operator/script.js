const name = prompt("이름을 입력해주세요.");
const height = Number(prompt("키를 입력해주세요."));
const weight = Number(prompt("체중을 입력해주세요."));

const result = (height - 100) * 0.9;

alert(
  `${name}님은 ${
    weight >= result - 5 && weight <= result + 5
      ? "적정 체중입니다."
      : "적정체중이 아닙니다."
  }`
);
