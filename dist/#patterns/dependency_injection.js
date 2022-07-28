"use strict";
// Application Layers
// 1: Work with Database (MongoRepository, MySqlRepository)
// 2: Business Logic (MongoRepository or MySqlRepository?)
class UserMongoDBRepo {
    getUsers() {
        console.log('Connect to MongoDB and get users');
        return [{ age: 15, username: 'User from MongoDB' }];
    }
}
class UserPostgresRepo {
    getUsers() {
        console.log('Connect to MongoDB and get users');
        return [{ age: 15, username: 'User from Postgres' }];
    }
}
// Business Logic
class UserService {
    // Aggregation
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    filterUserByAge(age) {
        const users = this.userRepo.getUsers();
        // Logic...
        console.log(users);
    }
}
const userService = new UserService(new UserMongoDBRepo());
userService.filterUserByAge(15);
