import {User} from './user';

export class Student extends User {
  study(): void {
    console.log(`${this.getFullName()} is studying.`);
  }
}