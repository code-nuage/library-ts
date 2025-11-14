class User {
  constructor(public firstname: string, public lastname: string, private _age: number) {
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value >= 0) {
      this._age = value;
    }
  }
}
export default User

