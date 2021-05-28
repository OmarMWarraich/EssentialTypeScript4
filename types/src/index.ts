// Using Classes

// TS doesnt have good support for constructor functions but that is because the focus
// has been on classes, building on the features provided by JS to make them more 
// familiar to programmers accustomed to languages such as C#.

type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    id: string;
    name: string;
    dept: string; 
    city: string;
    
    constructor(id: string, name: string, dept: string, city: string) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
};

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");

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

// Syntax for a TS class requires the declaration of instance properties and their types.
// This leads to more verbose classes-with the advantage of allowing the constructor
// parameter types to be different from the types of the instance properties to which they
// are assigned. Objects are created from classes using the standard new keyword and the
// compiler understands the use of the instanceof keyword for type narrowing when classes
// are used.

// The compiler generates standard classes that depend on the JS constructor function and
// prototype features at runtime. 