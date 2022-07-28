class User {
  private _username;
  private _password;
  private _id;

  // We get username and password from outside the class
  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
    this._id = this.generateRandomId();
  }

  generateRandomId() {
    return Math.floor(Math.random() * 10);
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this.username = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get id() {
    return this._id;
  }
}

const user = new User('garbalau-github', 'goodday777');

// Logging
console.log(user);

// Property is read-only, can't change it
// user.id = 5;
