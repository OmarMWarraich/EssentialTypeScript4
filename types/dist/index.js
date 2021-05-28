// Using Class Inheritance
// TS builds on the standard class inheritance features to make them more consistent and
// familiar, with some useful additions for commonly required tasks and for restricting
// some of the JS characterstics that can cause problems. 
// Adding A Class
class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
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
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
let data = [new Person("bsmith", "Bob Smith", "London"),
    new Employee("fvega", "Fidel Vega", "Sales", "Paris")];
data.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Employee) {
        item.writeDept();
    }
});
// When using the extends keyword, TS require that the superclass contructor is invoked
// using the super keyword, ensuring that its properties are initialized.
