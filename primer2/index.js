// Using Constructor Functions

// A constructor function is used to create a new object, configure its properties, 
// and assign its prototype, all of which is done in a single step with the new keyword.
// Constructor functions can be used to ensure that objects are created consistently
// and that the correct prototype is applied.

let Product = function(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function() {
    return `toString: Name: ${this.name}, Price: $[this.price]`;
}

let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100);

console.log(hat.toString());
console.log(boots.toString());

// Constructor functions are invoked with the new keyword, followed by the function 
// or its variable name and the arguments that will be used to configure the object.

// JS runtime creates a new object and uses it as the this value to invoke the constructor
// function, providing the argument values as parameters. The constructor function can 
// configure the object's own properties using this, which is set to the new Object.

// The prototype for the new object is set to the object returned by the prototype property
// of the constructor function. This leads to constructors being defined in two parts-the
// function itself is used to configure the object's own properties, while the object
// returned by the protoype property is used for the properties and methods that should
// be shared by all the objects the constructor creates.