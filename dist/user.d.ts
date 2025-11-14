declare class User {
    firstname: string;
    lastname: string;
    private _age;
    constructor(firstname: string, lastname: string, _age: number);
    getFullName(): string;
    get age(): number;
    set age(value: number);
}
export default User;
//# sourceMappingURL=user.d.ts.map