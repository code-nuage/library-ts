export declare class Repository<T extends {
    id: number;
}> {
    private items;
    add(item: T): void;
    getAll(): T[];
    findById(id: number): T | undefined;
    removeById(id: number): boolean;
}
//# sourceMappingURL=repository.d.ts.map