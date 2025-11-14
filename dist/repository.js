"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    findById(id) {
        return this.items.find(item => item.id === id);
    }
    removeById(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map