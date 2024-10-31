const person = {
  name: "Alice",
  age: 21,
  hello: function () {
    console.log(`hello! My name is ${this.name}`);
  },
  location: "seoul",
};

console.log(person.name);
person.hello();
person.gender = "woman";
console.log(person.gender);
person.bye = () => {
  console.log("Bye See you later!!!!");
};
person.bye();
delete person.location;
console.log(person);
