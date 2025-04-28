const Car = require("./Problem3");

describe("Car drives to a distance and stops at what distance", () => {
  let tata;

  beforeEach(() => {
    tata = new Car();
  });

  test("Should have some initial value in distance", () => {
    expect(tata.distance).toBe(0);
  });

  test("drive for some time when stopped check the actual distance", () => {
    expect(tata.drive()).toBe(1);
    expect(tata.drive()).toBe(2);
    expect(tata.drive()).toBe(3);
    expect(tata.drive()).toBe(4);
    expect(tata.stop()).toBe(4);
  });
});
