// Simplifying Class Constructors

// Pure JS classes use contructors that create instance properties dynamically but TS
// requires properties to be explicitly defined. The TS approach is the onte that most 
// programmers find familiar, but it can be verbose and repititve, especially when most 
// constructor parameters are assigned to properties that have the same name. TS supports
// a more concise synta for constructors that avoids the define and assign pattern.

type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    
    constructor(public readonly id: string, public name: string,
        private dept: string, public city: string) {
        // no statements required
    }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
};

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
//salesEmployee.id = "fidel"

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

// To simplify the constructor, access control keywords are applied to the parameters.

// The compiler automatically creates an instance property for each of the constructor
// arguments to which an access control keyword has been applied and assign the parameter
// value. The use of the access control keywords doesnt change the way the constructor
// is invoked and is required only to tell the compiler that corresponding instance
// variables are required. The concise syntax may be mixed with conventional parameters
// if required, and the readonly keyword is carried over to the instance properties 
// created by compiler.