// Application Layers
// 1: Work with Database (MongoRepository, MySqlRepository)
// 2: Business Logic (MongoRepository or MySqlRepository?)

interface UserRepo {
  getUsers: () => User[];
  // delete, create
}

class UserMongoDBRepo implements UserRepo {
  getUsers(): User[] {
    console.log('Connect to MongoDB and get users');
    return [{ age: 15, username: 'User from MongoDB' }];
  }
}

class UserPostgresRepo implements UserRepo {
  getUsers(): User[] {
    console.log('Connect to MongoDB and get users');
    return [{ age: 15, username: 'User from Postgres' }];
  }
}

// Business Logic
class UserService {
  userRepo: UserRepo;

  // Aggregation
  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  filterUserByAge(age: number) {
    const users = this.userRepo.getUsers();
    // Logic...
    console.log(users);
  }
}

const userService = new UserService(new UserMongoDBRepo());
userService.filterUserByAge(15);
