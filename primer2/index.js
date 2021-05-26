// Using JavaScript Classes

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100);

console.log(hat.toString());
console.log(boots.toString());

// Classes are defined with the class keyword, followed by a name for the class. 
// Objects are created from classed using the new keyword.
// The JS runtime creates a new object and invokes the class constructor function,
// which recieves the new object through the this value and which is responsible
// for defining the object's own properties. 