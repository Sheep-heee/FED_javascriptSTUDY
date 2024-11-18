const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [3, 5, 7, 2, 8];

const evenNumber = (arr) => {
  const evenArr = arr.filter((num) => num % 2 === 0);
  return evenArr;
};

const maximumNumber = (arr) => {
  const maxNumber = Math.max(...arr);
  return maxNumber;
};

console.log(evenNumber(numbers1));
console.log(maximumNumber(numbers2));
