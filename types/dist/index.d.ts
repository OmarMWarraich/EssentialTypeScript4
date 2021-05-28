interface Person {
    name: string;
    getDetails(): string;
}
declare class Employee implements Person {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    getDetails(): string;
}
declare class Customer implements Person {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
    getDetails(): string;
}
declare let data: Person[];
