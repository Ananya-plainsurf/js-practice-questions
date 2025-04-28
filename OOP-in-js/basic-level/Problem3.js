// Implement a Car class that has a method drive() and a method stop().
// Each time drive is called, it should increment a distance property.

class Car {
  constructor() {
    this.distance = 0;
  }

  drive() {
    return (this.distance += 1);
  }

  stop() {
    return this.distance;
  }
}

const tata = new Car();
tata.drive();
tata.drive();
tata.drive();
tata.drive();
console.log("value distance has value: ", tata.distance);
console.log("tata car stopped at distance: ", tata.stop());

module.exports = Car;
