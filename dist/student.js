"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const user_1 = require("./user");
class Student extends user_1.default {
    study() {
        console.log(`${this.getFullName()} is studying.`);
    }
}
exports.Student = Student;
exports.default = Student;
//# sourceMappingURL=student.js.map