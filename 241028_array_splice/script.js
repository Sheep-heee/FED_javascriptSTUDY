const fruits = ["apple", "banana", "kiwi"];

fruits.splice(0, 0, "blueberry");
console.log(fruits);

fruits.splice(1, 0, "mango");
console.log(fruits);

fruits.splice(0, 3, "apple", "blueberry");
console.log(fruits);

fruits.splice(0, 1);
console.log(fruits);

fruits.splice(3, 0, "grape");
console.log(fruits);

fruits.splice(3, 1);
console.log(fruits);

fruits.splice(2, 0, "apple");
console.log(fruits);

fruits.splice(0, 4);
console.log(fruits);
