"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Librarian = void 0;
const user_1 = require("./user");
class Librarian extends user_1.default {
    manage() {
        console.log(`${this.getFullName()} is managing the library.`);
    }
}
exports.Librarian = Librarian;
exports.default = Librarian;
//# sourceMappingURL=librarian.js.map