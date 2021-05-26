// Define Static Properties and Methods

// Properties and methods that are defined on the constructor function are often referrred
// to as static, meaning they are accessed through the constructor and not individual
// objects created by that constructor(as opposed to instance properties, which are accessed
// through an object). The Object.setPrototypeOf and Object.getPrototypeOf methods are
// good examples of static methods.

let Product = function(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

Product.process = (...products) => 
    products.forEach(p => console.log(p.toString()));

Product.process(new Product("Hat", 100, 1.2), new Product("Boots", 100));

// The static process method is degined by adding a new property to the Product function
// object and assigning it a funcion. Remember that JS functions are objects, and 
// properties can be freely added and removed from objects. The process method defines
// a rest parameter and uses the forEach method to invoke the toString method for each 
// object it recieves and writes the result to the console.