const Rectangle = require("./Problem2");

describe("Area of rectangle using class", () => {
  let rectangle;

  beforeEach(() => {
    rectangle = new Rectangle(20, 10);
  });

  test("should create a new rectangle", () => {
    expect(rectangle.width).toBe(20);
    expect(rectangle.height).toBe(10);
  });

  test("should return Area", () => {
    expect(rectangle.area()).toBe("Area of rectangle is: 200");
  });
});
