const numbers = [1, 2, 3, 4, 5];

const sumArray = (array) => {
  const sum = array.reduce((a, b) => a + b);
  console.log(sum);
};

const squareArray = (array) => {
  const newArray = [];
  array.forEach((num) => {
    newArray.push(num * num);
  });
  console.log(newArray);
};

sumArray(numbers);
squareArray(numbers);
