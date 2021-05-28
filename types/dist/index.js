// Type Guarding an Interface
class Employee {
    constructor(name, company) {
        this.name = name;
        this.company = company;
        // no statements required
    }
    getDetails() {
        return `${this.name} works for ${this.company}`;
    }
}
class SportsProduct {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
        // no statements required
    }
}
let data = [new Employee("Bob Smith", "Acme"),
    new SportsProduct("Running Shoes", "Running", 90.50),
    new Employee("Dora Peters", "BigCo")];
data.forEach(item => {
    if ("getDetails" in item) {
        console.log(`Person: ${item.getDetails()}`);
    }
    else {
        console.log(`Product: ${item.name}, ${item.price}`);
    }
});
// This listing uses the presence of the getDetails property to identify those objects
// that implement the Person interface, allowing the contents of the data array to be 
// narrowed to the Person or Product type.
