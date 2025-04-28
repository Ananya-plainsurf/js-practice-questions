// 2. Create a Rectangle class with properties width and height, and a method area() that returns the area.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    const area = this.width * this.height;
    console.log(`Area of rectangle is: ${area}`);
    return `Area of rectangle is: ${area}`;
  }
}

const rectangle = new Rectangle(20, 10);
rectangle.area();

module.exports = Rectangle;
