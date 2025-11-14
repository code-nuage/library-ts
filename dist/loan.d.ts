import { Book } from "./book";
import { Student } from "./student";
import { LoanStatus } from "./types";
export interface Loan {
    book: Book;
    student: Student;
    date: Date;
    status: LoanStatus;
}
export declare const getActiveLoans: (loans: Loan[]) => Loan[];
export declare const getLoansByStudent: (loans: Loan[], student: Student) => Loan[];
//# sourceMappingURL=loan.d.ts.map