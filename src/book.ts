import { Author } from "./author";
import { BookCategory } from "./types";

export interface Book {
    id: number;
    title: string;
    author: Author | undefined;
    available: boolean;
    categories: BookCategory[];
}
