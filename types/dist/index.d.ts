declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare class Employee {
    id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let salesEmployee: Employee;
declare let data: (Person | Employee)[];
