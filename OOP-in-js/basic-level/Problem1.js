// Create a Person class with properties name and age, and a method introduce() that logs a message like:
// 👉 "Hi, I'm Alice and I'm 25 years old."

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    const result = `Hi! my name is ${this.name} and I am ${this.age} years old.`;
    console.log(result);
    return result;
  }
}

const person1 = new Person("Ananya", 27);
const person2 = new Person("Bhaskar", 28);
person1.introduce();
person2.introduce();

module.exports = Person;
