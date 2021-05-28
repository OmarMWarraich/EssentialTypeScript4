declare type Person = {
    id: string;
    name: string;
    city: string;
    contact: {
        phone: number;
    };
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
    contact: {
        name: string;
    };
};
declare type EmployedPerson = Person & Employee;
declare let typeTest: {
    phone: number;
} & {
    name: string;
};
declare let person1: EmployedPerson;
declare let person2: EmployedPerson;
