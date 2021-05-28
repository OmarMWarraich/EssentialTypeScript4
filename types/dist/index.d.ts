declare type Person = {
    id: string;
    name: string;
    city: string;
    contact: number;
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
    contact: string;
};
declare type EmployedPerson = Person & Employee;
declare let typeTest: never;
declare let person1: EmployedPerson;
declare let person2: EmployedPerson;
