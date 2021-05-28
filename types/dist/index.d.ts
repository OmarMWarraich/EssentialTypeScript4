declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare type Employee = {
    id: string;
    name: string;
    dept: string;
    city: string;
    writeDept: () => void;
};
declare let Employee: (id: string, name: string, dept: string, city: string) => void;
declare let salesEmployee: any;
declare let data: (Person | Employee)[];
