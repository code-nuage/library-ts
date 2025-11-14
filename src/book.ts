import { Author } from "./author";
import { BookCategory } from "./types";

export interface Book {
    id: number;
    title: string;
    author: Author;
    available: boolean;
    categories: BookCategory[];
}
