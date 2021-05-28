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
