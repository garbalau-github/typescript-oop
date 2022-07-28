interface Repository<T> {
  // We dont know what repo will implement this interface,
  // so we can add T generic instead of class (as a placeholder)
  create: (obj: T) => string;
  get: () => string;
  delete: (obj: T) => string;
  update: (obj: T) => string;
}

class UserClass {
  username: string = 'User';
  age: number = 24;
}

class CarClass {
  model: string = 'Tesla';
}

// <UserClass> defines T inside the interface of Repository
class UserRepo implements Repository<UserClass> {
  create(obj: UserClass): string {
    return 'create';
  }
  get(): string {
    return 'get';
  }
  delete(obj: UserClass): string {
    return 'delete';
  }
  update(obj: UserClass): string {
    return 'update';
  }
}

// <CarClass> defines T inside the interface of Repository
class CarRepo implements Repository<CarClass> {
  create(obj: CarClass): string {
    return 'create';
  }
  get(): string {
    return 'get';
  }
  delete(obj: CarClass): string {
    return 'delete';
  }
  update(obj: CarClass): string {
    return 'update';
  }
}
