const Person = require("./Problem1");

describe("Person class", () => {
  let person1;
  let person2;

  beforeEach(() => {
    person1 = new Person("Ananya", 27);
    person2 = new Person("Bhaskar", 28);
  });

  test("should create a person with name and age", () => {
    expect(person1.name).toBe("Ananya");
    expect(person1.age).toBe(27);
    expect(person2.name).toBe("Bhaskar");
    expect(person2.age).toBe(28);
  });

  test("should introduce themselves correctly", () => {
    expect(person1.introduce()).toBe(
      "Hi! my name is Ananya and I am 27 years old."
    );
    expect(person2.introduce()).toBe(
      "Hi! my name is Bhaskar and I am 28 years old."
    );
  });
});
