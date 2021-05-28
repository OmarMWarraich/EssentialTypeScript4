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
declare class Customer {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
}
declare let data: (Person | Customer)[];
