// Using inheritance in Classes
// Classes can inherit features using the extends keyword and invoke the superclass
// constructor and mwthods using the super keyword.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

class TaxedProduct extends Product {

    constructor(name, price, taxRate = 1.2) {
        super(name, price);
        this.taxRate = taxRate;
    }

    getPriceIncTax() {
        return Number(this.price) * this.taxRate;
    }

    toString() {
        let chainResult = super.toString();
        return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
    }
}

let hat = new TaxedProduct("Hat", 100);
let boots = new TaxedProduct("Boots", 100, 1.3)


console.log(hat.toString());
console.log(boots.toString());

// A class declares its superclass using the extends keyword. TaxedProduct class uses the
// extend keyword to inherit from the Product class. The super keyword is used in the 
// constructor to invoke the superclass constructor, which is equivalent to chaining
// constructor functions.

// constructor(name, price, taxRate = 1.2) {
//     super(name, price);
//     this.taxRate= taxRate;
// }

// The super keyword must be used before the this keyword and is generally used in the
// first statement in the constructor. The super keyword can also be used to access 
// superclass properties and methods like this.

//toString() {
//    let chainResult = super.toString();
//    return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
//}

// The toString method defined by the TaxedProduct class invoked the superclass's toString
// method, which is equivalent to overriding prototype methods.

