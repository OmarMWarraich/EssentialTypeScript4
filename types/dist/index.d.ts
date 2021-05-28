declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
};
declare type EmployedPerson = Person & Employee;
declare function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[];
declare let people: Person[];
declare let employees: Employee[];
declare let dataItems: EmployedPerson[];
