// Using Interfaces
class Employee {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
        //no statements required
    }
    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}
class Customer {
    constructor(id, name, city, creditLimit) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}
let data = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer("ajones", "Alice Jones", "London", 500)
];
data.forEach(item => console.log(item.getDetails()));
// Interfaces are defined by the interface keyword and contain the set of properties and
// methods that a class must provide in order to conform to the interface.
// Unlike abstract classes, interfaces don't implement methods or define a constructor
// and just define a shape. Interfaces are implemented by classes through the implements
// keyword.
// The Person interface defines a name property and getDetails method, so the Employee
// and Customer classes must define the same property and method. These classes can
// define extra properties and methods, but they can only conform to the interface by 
// providing name and getDetails. 
// The data array can contain any object created from a class that implements the Product
// array, although the function passed to the forEach method can acess only the features
// defined by the interface unless objects are narrowed to a more specific type.
