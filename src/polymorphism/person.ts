class PersonPoly {
  private _firstName;
  private _lastName;
  private _age;

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  public greeting() {
    return `Hello, I'm ${this._firstName} ${this._lastName}`;
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

// Inherit everything from PersonPoly
class EmployeePoly extends PersonPoly {
  private _salary;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    salary: number
  ) {
    // PersonPoly constructor call
    super(firstName, lastName, age);
    this._salary = salary;
  }

  public greeting() {
    return `Hello, I'm ${this.firstName} ${this.lastName} and I'm employee`;
  }
}

class DeveloperPoly extends EmployeePoly {
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

  public greeting() {
    return `Hello, I'm ${this.firstName} ${this.lastName} and I'm a developer`;
  }
}

const personObj = new PersonPoly('Travis', 'Scott', 31);
const employeeObj = new EmployeePoly('Nick', 'Garbalau', 24, 9999);
const developerObj = new DeveloperPoly(
  'Anastasia',
  'Martiniuc',
  21,
  99999,
  'Junior'
);

// Everyone has access to .greeting() method
// console.log(personObj.greeting());
// console.log(employeeObj.greeting());
// console.log(developerObj.greeting());

const personList: PersonPoly[] = [personObj, employeeObj, developerObj];

function massGreeting(persons: PersonPoly[]) {
  persons.forEach((person) => {
    console.log(person.greeting());
  });
}

massGreeting(personList);
