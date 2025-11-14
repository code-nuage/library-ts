import { Book } from "./book";
import Student from "./student";

type LoanStatus ="ongoing"|"returned";

export interface Loan {
    book: Book;
    student: Student;
    date: Date;
    status: LoanStatus;
}

export const loan1: Loan = {
    book: { id: 1, title: "Le Seigneur des Anneaux", author: { id: 1, name: "Tolkien" }, available: true, categories: ["novel"] },
    student: { id: 101, firstname: "Alice", lastname: "", _age: 20 } as any,
    date: new Date("2025-11-01"),
    status: "ongoing"
};

export const loan2: Loan = {
    book: { id: 2, title: "Histoire de France", author: { id: 2, name: "Michelet" }, available: true, categories: ["history"] },
    student: { id: 102, firstname: "Bob", lastname: "", _age: 21 } as any,
    date: new Date("2025-10-15"),
    status: "ongoing"
};

export const loan3: Loan = {
    book: { id: 3, title: "Physique Moderne", author: { id: 3, name: "Einstein" }, available: false, categories: ["science"] },
    student: { id: 103, firstname: "Clara", lastname: "", _age: 22 } as any,
    date: new Date("2025-09-20"),
    status: "returned"
};

export const getActiveLoans = (loans: Loan[]): Loan[] => {
    return loans.filter(loan => loan.status === "ongoing");
};