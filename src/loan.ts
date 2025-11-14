import { Book } from "./book";
import { Student } from "./student";
import { LoanStatus } from "./types";

export interface Loan {
  book: Book;
  student: Student;
  date: Date;
  status: LoanStatus;
}

// Function to get active loans
export const getActiveLoans = (loans: Loan[]): Loan[] => {
  return loans.filter(loan => loan.status === "ongoing");
};

// Function to get loans by student
export const getLoansByStudent = (loans: Loan[], student: Student): Loan[] => {
  return loans.filter(loan => loan.student === student);
};
