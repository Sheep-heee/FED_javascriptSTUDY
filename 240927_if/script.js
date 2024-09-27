const num = Number(prompt("숫자를 입력해주세요."));

if (num < 1 || num > 100) {
  alert("1에서 100사이의 숫자를 입력해 주세요.");
} else {
  if (num % 2 === 0) {
    alert("짝수");
  } else {
    alert("홀수");
  }
}
