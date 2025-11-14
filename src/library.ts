import { Book } from "./book";

class Library {
    private books: Book[] = [];

    constructor() {}

    addBook(b: Book): Library {
        this.books.push(b);
        return this;
    }

    listAvailable(): Book[] {
        return this.books.filter(b => b.available === true);
    }

    findBookById(id: number): Book | undefined {
        return this.books.find(b => b.id === id);
    }
}

export default Library;