const i = Number(prompt("숫자를 입력해주세요."));
let j = Number(prompt("숫자를 입력해주세요."));

console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 더한 결과를 j에 넣으면 값은 ${(j += i)}`);

console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 뺀 결과를 j에 넣으면 값은 ${(j -= i)}`);

console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 곱한 결과를 j에 넣으면 값은 ${(j *= i)}`);

console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 나눈 결과를 j에 넣으면 값은 ${(j /= i)}`);

console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 나눈 나머지를 j에 넣으면 값은 ${(j %= i)}`);
