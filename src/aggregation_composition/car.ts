class Engine {
  drive() {
    console.log('Engine is working...');
  }
}

class Wheel {
  drive() {
    console.log('Wheels are okay...');
  }
}

// Aggregation Class
class Freshener {}

class Car {
  engine: Engine;
  wheels: Wheel[] = [];
  freshener: Freshener;

  constructor(freshener: string) {
    // Aggregation (lives somewhere outside)
    this.freshener = freshener;
    // Composition (lives here)
    this.engine = new Engine();
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
  }

  // Delegation
  drive() {
    // Call methods
    this.engine.drive();
    this.wheels.forEach((wheel) => wheel.drive());
  }
}

const car = new Car('apple');
car.drive();
