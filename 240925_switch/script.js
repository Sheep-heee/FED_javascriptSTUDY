const score = Number(prompt("점수를 입력해주세요."));

switch (score > 0) {
  case score >= 90:
    alert("A등급");
    break;
  case score >= 80:
    alert("B등급");
    break;
  case score >= 70:
    alert("C등급");
    break;
  case score >= 60:
    alert("D등급");
    break;
  default:
    alert("F등급");
}
