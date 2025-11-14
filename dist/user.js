"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    firstname;
    lastname;
    _age;
    constructor(firstname, lastname, _age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this._age = _age;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0) {
            this._age = value;
        }
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map