/**
 * Singleton is a pattern which comes handy when you want to limit
 * the number of instances of an object
 */

class Database {
  url;
  // Static can be accesed without created from class object
  private static instance: Database;

  constructor() {
    // If there is instance of Database
    if (Database.instance) {
      // Return it
      return Database.instance;
    }
    this.url = Math.random();
    Database.instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();

// Different urls / Same urls
console.log(db1.url);
console.log(db2.url);
