"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Library {
    books = [];
    constructor() { }
    addBook(b) {
        this.books.push(b);
        return this;
    }
    listAvailable() {
        return this.books.filter(b => b.available === true);
    }
    findBookById(id) {
        return this.books.find(b => b.id === id);
    }
}
exports.default = Library;
//# sourceMappingURL=library.js.map