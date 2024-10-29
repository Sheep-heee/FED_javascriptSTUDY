const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("------------------1번 문제------------------");
arr.forEach((num, idx) => {
  console.log(`${idx}번째 값은 : ${num}`);
});

console.log("------------------2번 문제------------------");
const arr1 = arr.map((num) => num * 2);
console.log(arr1);

console.log("------------------3번 문제------------------");
const arr2 = arr.filter((num) => num % 2 === 0);
console.log(arr2);

console.log("------------------4번 문제------------------");
console.log(arr2.find((num) => num > 5));

console.log("------------------5번 문제------------------");
console.log(arr.sort());
console.log(
  arr.sort((a, b) => {
    return a - b;
  })
);

console.log("------------------6번 문제-----------------");
console.log(
  arr.sort((a, b) => {
    return b - a;
  })
);

console.log("------------------7번 문제------------------");
console.log(
  arr.reduce((a, b) => {
    return a + b;
  })
);
