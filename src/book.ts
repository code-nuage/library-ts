import { Author } from "./author";

interface Book {
    id: number;
    title: string;
    author: Author;
    available: boolean;
    categories: string [];
}
