// Defining Readonly Properties

// The Readonly keyword can be used to create instance properties whose value is assigned
// by the constructor but cannot otherwise be changed.

type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    public readonly id: string;
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
salesEmployee.id = "fidel"

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

// The readonly keyword must come after the access control keyword if one has been used.

// The application of the readonly keyword to the id property means the value assigned by
// the constructor cannot be changed subsequently. The statement that attempts to assign 
// a new value to the id property causes the following compiler errors:

// error TS2540: Cant assign to id coz its readonly