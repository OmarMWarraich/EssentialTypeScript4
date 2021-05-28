// Using JavaScript Private Fields

// TS supports a JS feature working its way through the standardization process and that
// is likely to be added to the language specification. This feature is support for pvt
// fields which provides an alternatve to the private keyword however private is recommended.

// Using a Private Field

type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    public id: string;
    public name: string;
    #dept: string; 
    public city: string;
    
    constructor(id: string, name: string, dept: string, city: string) {
        this.id = id;
        this.name = name;
        this.#dept = dept;
        this.city = city;
    }

    writeDept() {
        console.log(`${this.name} works in ${this.#dept}`);
    }
};

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();

let data: (Person | Employee )[] = 
    [{id: "bsmith", name: "Bob Smith", city: "London"},
     {id: "ajones", name: "Alice Jones", city: "Paris"},
     {id: "dpeters", name: "Dora Peters", city: "New York"},
     salesEmployee];


data.forEach(item => {
    if (item instanceof Employee) {
        item.writeDept();
    } else {
    console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});

// Private Fields are denoted with the # character.

// # advantage over keyword private is that the # character is not removed during the
// compilation process, which means that access control is enforced by JS runtime.
// Like most JS features, the private keyword is not included in the JS code produced
// by the compiler, which means that access control is not enforced in the JS code.