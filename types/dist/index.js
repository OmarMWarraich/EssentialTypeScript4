// Defining Optional Interface Properties and Methods
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
let data = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"), alice];
data.forEach(item => {
    console.log(item.getDetails());
    if (item.getDogDetails) {
        console.log(item.getDogDetails());
    }
});
// Declaring an optional property on an interface is done using the question mark 
// character after the name.
// Defining optional interface members
// Optional interface features can be defined through the interdace type without causing
// compiler errors, but you must check to ensure that you do not recieve undefined Values
// since objects may have been created from classes that have not implemented them.
