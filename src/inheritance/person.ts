class Person {
  private _firstName;
  private _lastName;
  private _age;

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  fullName() {
    return `Hello, I am ${this._firstName} ${this._lastName}`;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    value < 0 ? (this._age = 0) : (this._age = value);
  }
}

// Inherit everything from Person
class Employee extends Person {
  private _salary;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    salary: number
  ) {
    // Person constructor call
    super(firstName, lastName, age);
    this._salary = salary;
  }
}

const employee = new Employee('Nick', 'Garbalau', 24, 9999);

console.log(employee);

class Developer extends Employee {
  private _level;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    salary: number,
    level: string
  ) {
    super(firstName, lastName, age, salary);
    this._level = level;
  }
}

const developer = new Developer('Anastasia', 'Martiniuc', 21, 99999, 'Junior');

console.log(developer);
console.log(developer.fullName());
