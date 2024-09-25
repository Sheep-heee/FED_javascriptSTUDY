const a = Number(prompt("첫번째 숫자를 입력해주세요."));
const b = Number(prompt("두번째 숫자를 입력해주세요."));

a > b
  ? alert(`${a}(이)가 ${b}보다 큽니다.`)
  : alert(`${a}(이)가 ${b}보다 작습니다.`);
