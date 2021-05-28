// Using an Abstract Class
// Abstract classes cannot be instantiated directly and are used to describe common
// functionality that must be implemented by subclasses, forcing subclasses to adhere
// to a specific shape but allowing class-specific implementations of specific methods.
class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    getDetails() {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }
}
class Employee extends Person {
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    getSpecificDetails() {
        return `works in ${this.dept}`;
    }
}
class Customer extends Person {
    constructor(id, name, city, creditLimit) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
    getSpecificDetails() {
        return `has ${this.creditLimit} limit`;
    }
}
class Supplier extends Person {
    constructor(id, name, city, companyName) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.companyName = companyName;
    }
    getSpecificDetails() {
        return `works for ${this.companyName}`;
    }
}
let data = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer("ajones", "Alice Jones", "London", 500)];
data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));
data.forEach(item => console.log(item.getDetails()));
// Abstract classes are created using the abstract keyword before the class keyword.
// The abstract keyword is also applied to individual methods, which are defined 
// without a body.
// Defining an abstract method.
// When a class extends an abstract class, it must implement all the abstract methods.
// Above, the abstract class defines an abstract method named getSpecificDetails which
// must be implemented by the Employee, Customer and SUpplier classes. The Person class
// also defines a regular method named getDetails which invokes the abstract method and 
// uses its result.
// Objects instantiated from classes derived from an abstract class can be used 
// through the abstract class type, which means that the Employee, Customer and SUpplier
// objects can be stored in a Person array, altough only the properties and methods 
// defined by the Person class can be used unless objects are narrowed to a more specific
// type.
