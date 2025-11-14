// Type aliases
export type BookCategory = "novel" | "history" | "science" | "poetry";
export type Role = "student" | "librarian" | "admin";
export type LoanStatus = "ongoing" | "returned";

// Validation function
export const isValidCategory = (cat: string): cat is BookCategory => {
  return ["novel", "history", "science", "poetry"].includes(cat);
};
