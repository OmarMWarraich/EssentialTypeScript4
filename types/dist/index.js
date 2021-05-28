// Implementing Multiple Interfaces
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
    constructor(id, name, city, creditLimit, dogName) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        this.dogName = dogName;
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
    getDogDetails() {
        return `${this.name} has a dog named ${this.dogName}`;
    }
}
let alice = new Customer("ajones", "Alice Jones", "London", 500, "Fido");
let dogOwners = [alice];
dogOwners.forEach(item => console.log(item.getDogDetails()));
let data = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"), alice];
data.forEach(item => console.log(item.getDetails()));
// Interfaces are listed after the implements keyword, spearated with commas. Above, the
// Customer class implements the Person and DowgOwner interfaces, which means that the 
// Person object assigned to the variable named alice can be added to the arrays typed
// for Person and DogOwner objects.
//Note!
// A class can implement multiple interfaces only if there are no overlapping properties
// with conflicting types. e.g., if the Person interface defined a string property named
// id and if the DogOwner interface defined a number property with the same name, the 
// Customer class would not be able to implement both interfaces because there is no value
// that could be assigned to its id property that could represent both types.
