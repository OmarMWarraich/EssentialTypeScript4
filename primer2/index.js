// Checking Prototype Types

// The instanceof operator is used to determine whether a constructor's prototype is part
// of the chain for a specific object.

let Product = function(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

let TaxedProduct = function(name, price, taxRate) {
    Product.call(this, name, price);
    this.taxRate = taxRate;
}

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function() {
    return Number(this.price) * this.taxRate;
}

TaxedProduct.prototype.toTaxString = function() {
    return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
}

let hat = new TaxedProduct("Hat", 100, 1.2);
let boots = new Product("Boots", 100);

console.log(hat.toTaxString());
console.log(boots.toString());
console.log(`hat and TaxedProduct: ${ hat instanceof TaxedProduct}`);
console.log(`hat and Product: ${ hat instanceof Product}`);
console.log(`boots and TaxedProduct: ${boots instanceof TaxedProduct}`);
console.log(`boots and Product: ${ boots instanceof Product}`);

// The new statements use instanceof to determine whether the prototypes of the 
// TaxedProduct and Product constructor functions are in the chains of the hat 
// and boots objects.


// 2 steps must be taken to arrange the constructors and their prototypes in a chain.
// the first step is to use the call method to invoke the next constructor so that new
// objects are created correctly. 

//Product.call(this, name, price);

// The call method allows the new object to be passed to the next constructor through
// the this value. The second step is to link the prototypes together.

// Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

// The args to the setPrototypeOf method are the objects returned by the constructor
// function's prototype properties and not the functions themselves. Linking the prototypes
// ensures that the JS runtime will follow the chain when it looks for properties that 
// are not an object's own.