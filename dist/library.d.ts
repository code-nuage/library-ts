import { Book } from "./book";
declare class Library {
    private books;
    constructor();
    addBook(b: Book): Library;
    listAvailable(): Book[];
    findBookById(id: number): Book | undefined;
}
export default Library;
//# sourceMappingURL=library.d.ts.map