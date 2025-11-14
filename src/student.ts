import User from './user';

class Student extends User {
  study(): void {
    console.log(`${this.getFullName()} is studying.`);
  }
}

export default Student;