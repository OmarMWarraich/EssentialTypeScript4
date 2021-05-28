declare abstract class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
    getDetails(): string;
    abstract getSpecificDetails(): string;
}
declare class Employee extends Person {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    getSpecificDetails(): string;
}
declare class Customer extends Person {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
    getSpecificDetails(): string;
}
declare class Supplier extends Person {
    readonly id: string;
    name: string;
    city: string;
    companyName: string;
    constructor(id: string, name: string, city: string, companyName: string);
    getSpecificDetails(): string;
}
declare let data: Person[];
