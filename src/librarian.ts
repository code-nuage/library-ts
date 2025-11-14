import User from './user';

export class Librarian extends User {
  manage(): void {
    console.log(`${this.getFullName()} is managing the library.`);
  }
}

export default Librarian;