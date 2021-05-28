// Using the Access Control Keywords

// Js doesnt provide access controls which means that all of an object's instance
// properties are accessible, such that classes-or the objects created from them-can be
// easily changed or depndencies created on impementation features. In pure JS, property
// naming conventions are used to indicate which properties are not to be used, but TS
// goes further and supports keywords that can be used to manage access to class properties.

// The TypeScript Access Control Keywords

// public --- Free access to a property or method and is the default if no keyword used.

// private -- Restricts access to the class that defines the prop or meth its applied to.

// protected-rstcts aces 2da clas definng peop or meth its aplyd 2 & its subclasses.

// Although TS treats props as public by default when there is no keyword, however, the
// public keyword can be explicitly applied for easy understanding.

type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    public id: string;
    public name: string;
    private dept: string; 
    public city: string;
    
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
console.log(`Dept value: ${salesEmployee.dept}`);

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

// The effect of the private keyword is to restrict access to within the Employee class,
// and the compiler generates the following error for the statement that attempts to 
// read the value of the dept property from outside the class.
// error TS2341: pvt and only accessible within class.

// The only way that the dept prop be accessed is thru the writeDept method a part of 
// Employee class allowed by the pvt keyword.