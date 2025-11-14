export type BookCategory = "novel" | "history" | "science" | "poetry";
export const bookCategories: BookCategory[] = ["novel", "history", "science", "poetry"];

export type Role = "student" | "librarian" | "admin";
export type LoanStatus = "ongoing" | "returned";

export const isValidCategory = (cat: string): cat is BookCategory => {
  return ["novel", "history", "science", "poetry"].includes(cat);
};
