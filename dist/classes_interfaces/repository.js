"use strict";
class UserClass {
    constructor() {
        this.username = 'User';
        this.age = 24;
    }
}
class CarClass {
    constructor() {
        this.model = 'Tesla';
    }
}
// <UserClass> defines T inside the interface of Repository
class UserRepo {
    create(obj) {
        return 'create';
    }
    get() {
        return 'get';
    }
    delete(obj) {
        return 'delete';
    }
    update(obj) {
        return 'update';
    }
}
// <CarClass> defines T inside the interface of Repository
class CarRepo {
    create(obj) {
        return 'create';
    }
    get() {
        return 'get';
    }
    delete(obj) {
        return 'delete';
    }
    update(obj) {
        return 'update';
    }
}
