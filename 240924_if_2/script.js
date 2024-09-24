const num = Number(prompt("점수를 입력해주세요"));

if (num >= 90 && num <= 100) {
  alert("A등급");
} else if (num >= 80 && num <= 89) {
  alert("B등급");
} else if (num >= 70 && num <= 79) {
  alert("C등급");
} else if (num >= 60 && num <= 69) {
  alert("D등급");
} else {
  alert("F등급");
}
