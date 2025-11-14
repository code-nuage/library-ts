import { Author } from "./author";
import { Book } from "./book";
import User from "./user";
import { Student } from "./student";
import { Librarian } from "./librarian";
import Library from "./library";
import { Loan, getActiveLoans, getLoansByStudent } from "./loan";
import { Repository } from "./repository";
import { BookCategory, isValidCategory } from "./types";

console.log("=== LIBRARY MANAGEMENT SYSTEM DEMONSTRATION ===\n");

// ========================================
// 1. CREATE AUTHORS
// ========================================
console.log("--- 1. Creating Authors ---");
const author1: Author = { id: 1, name: "Victor Hugo", birthYear: 1802 };
const author2: Author = { id: 2, name: "Jules Verne", birthYear: 1828 };
const author3: Author = { id: 3, name: "Albert Camus" };

console.log(`Author 1: ${author1.name} (${author1.birthYear})`);
console.log(`Author 2: ${author2.name} (${author2.birthYear})`);
console.log(`Author 3: ${author3.name}\n`);

// ========================================
// 2. CREATE BOOKS
// ========================================
console.log("--- 2. Creating Books ---");
const book1: Book = {
  id: 1,
  title: "Les Misérables",
  author: author1,
  available: true,
  categories: ["novel", "history"]
};

const book2: Book = {
  id: 2,
  title: "Vingt mille lieues sous les mers",
  author: author2,
  available: true,
  categories: ["novel", "science"]
};

const book3: Book = {
  id: 3,
  title: "L'Étranger",
  author: author3,
  available: true,
  categories: ["novel"]
};

console.log(`Book 1: "${book1.title}" by ${book1?.author?.name}`);
console.log(`Book 2: "${book2.title}" by ${book2?.author?.name}`);
console.log(`Book 3: "${book3.title}" by ${book3?.author?.name}\n`);

// Test category validation
console.log("--- Testing Category Validation ---");
console.log(`Is "novel" a valid category? ${isValidCategory("novel")}`);
console.log(`Is "romance" a valid category? ${isValidCategory("romance")}\n`);

// ========================================
// 3. CREATE LIBRARY AND ADD BOOKS
// ========================================
console.log("--- 3. Library Management ---");
const library = new Library();
library.addBook(book1).addBook(book2).addBook(book3);

console.log("Books added to library!");
console.log(`Available books: ${library.listAvailable().length}`);
console.log("Available books:");
library.listAvailable().forEach(book => {
  console.log(`  - "${book.title}" by ${book?.author?.name}`);
});
console.log();

// ========================================
// 4. CREATE USERS (POLYMORPHISM DEMONSTRATION)
// ========================================
console.log("--- 4. Users and Polymorphism ---");
const student1 = new Student("Alice", "Martin", 20);
const student2 = new Student("Bob", "Durant", 22);
const student3 = new Student("Charlie", "Dubois", 19);
const librarian1 = new Librarian("Marie", "Curie", 35);

// Array of Users demonstrating polymorphism
const users: User[] = [student1, student2, student3, librarian1];

console.log("All users in the system:");
users.forEach(user => {
  console.log(`  - ${user.getFullName()}, Age: ${user.age}`);
});
console.log();

// Demonstrate specific methods
console.log("Demonstrating user-specific behaviors:");
student1.study();
librarian1.manage();
console.log();

// ========================================
// 5. CREATE LOANS
// ========================================
console.log("--- 5. Creating Loans ---");

// Mark books as unavailable when loaned
book1.available = false;
book2.available = false;

const loan1: Loan = {
  book: book1,
  student: student1,
  date: new Date("2024-11-01"),
  status: "ongoing"
};

const loan2: Loan = {
  book: book2,
  student: student1,
  date: new Date("2024-11-05"),
  status: "ongoing"
};

const loan3: Loan = {
  book: book3,
  student: student2,
  date: new Date("2024-10-20"),
  status: "returned"
};

const allLoans: Loan[] = [loan1, loan2, loan3];

console.log(`Total loans created: ${allLoans.length}`);
allLoans.forEach((loan, index) => {
  console.log(`  Loan ${index + 1}: "${loan.book.title}" to ${loan.student.getFullName()} - Status: ${loan.status}`);
});
console.log();

// ========================================
// 6. FILTER ACTIVE LOANS
// ========================================
console.log("--- 6. Active Loans ---");
const activeLoans = getActiveLoans(allLoans);
console.log(`Active loans: ${activeLoans.length}`);
activeLoans.forEach(loan => {
  console.log(`  - "${loan.book.title}" borrowed by ${loan.student.getFullName()}`);
});
console.log();

// ========================================
// 7. FILTER LOANS BY STUDENT
// ========================================
console.log("--- 7. Loans by Student ---");
const student1Loans = getLoansByStudent(allLoans, student1);
console.log(`${student1.getFullName()} has ${student1Loans.length} loan(s):`);
student1Loans.forEach(loan => {
  console.log(`  - "${loan.book.title}" (${loan.status})`);
});
console.log();

// ========================================
// 8. DEMONSTRATE REPOSITORY PATTERN
// ========================================
console.log("--- 8. Generic Repository ---");

// Repository for Books
const bookRepository = new Repository<Book>();
bookRepository.add(book1);
bookRepository.add(book2);
bookRepository.add(book3);

console.log(`Books in repository: ${bookRepository.getAll().length}`);
console.log("All books:");
bookRepository.getAll().forEach(book => {
  console.log(`  - ID: ${book.id}, Title: "${book.title}"`);
});

// Find by ID
const foundBook = bookRepository.findById(2);
console.log(`\nFound book with ID 2: "${foundBook?.title}"`);

// Repository for Authors
const authorRepository = new Repository<Author>();
authorRepository.add(author1);
authorRepository.add(author2);
authorRepository.add(author3);

console.log(`\nAuthors in repository: ${authorRepository.getAll().length}`);
console.log("All authors:");
authorRepository.getAll().forEach(author => {
  console.log(`  - ID: ${author.id}, Name: ${author.name}`);
});

// Remove an author
console.log(`\nRemoving author with ID 3...`);
const removed = authorRepository.removeById(3);
console.log(`Removal successful: ${removed}`);
console.log(`Authors remaining: ${authorRepository.getAll().length}`);
console.log();

// ========================================
// 9. BUSINESS RULE: MAX 3 LOANS PER STUDENT
// ========================================
console.log("--- 9. Business Rule: Max 3 Active Loans ---");
const checkLoanLimit = (student: Student, loans: Loan[]): boolean => {
  const studentActiveLoans = loans.filter(
    loan => loan.student === student && loan.status === "ongoing"
  );
  return studentActiveLoans.length < 3;
};

console.log(`Can ${student1.getFullName()} borrow more books? ${checkLoanLimit(student1, allLoans)}`);
console.log(`Can ${student2.getFullName()} borrow more books? ${checkLoanLimit(student2, allLoans)}`);
console.log();

// ========================================
// 10. FINAL LIBRARY STATUS
// ========================================
console.log("--- 10. Final Library Status ---");
console.log(`Total books in library: ${library.listAvailable().length + activeLoans.length}`);
console.log(`Available books: ${library.listAvailable().length}`);
console.log("Available books:");
library.listAvailable().forEach(book => {
  console.log(`  - "${book.title}"`);
});

console.log("\n=== DEMONSTRATION COMPLETE ===");
