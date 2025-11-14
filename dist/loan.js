"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoansByStudent = exports.getActiveLoans = void 0;
// Function to get active loans
const getActiveLoans = (loans) => {
    return loans.filter(loan => loan.status === "ongoing");
};
exports.getActiveLoans = getActiveLoans;
// Function to get loans by student
const getLoansByStudent = (loans, student) => {
    return loans.filter(loan => loan.student === student);
};
exports.getLoansByStudent = getLoansByStudent;
//# sourceMappingURL=loan.js.map