"use strict";
class Person {
    constructor(firstName, lastName, age) {
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
    constructor(firstName, lastName, age, salary) {
        // Person constructor call
        super(firstName, lastName, age);
        this._salary = salary;
    }
}
const employee = new Employee('Nick', 'Garbalau', 24, 9999);
console.log(employee);
class Developer extends Employee {
    constructor(firstName, lastName, age, salary, level) {
        super(firstName, lastName, age, salary);
        this._level = level;
    }
}
const developer = new Developer('Anastasia', 'Martiniuc', 21, 99999, 'Junior');
console.log(developer);
console.log(developer.fullName());
