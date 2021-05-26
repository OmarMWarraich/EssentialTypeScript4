// Define Static Methods

// The static keyword is applied to create static methods that are accessed through the
// class, rather than the object it creates.

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

    static process(...products) {
        products.forEach(p => console.log(p.toString()));
    }
}

TaxedProduct.process(new TaxedProduct("Hat", 100, 1.2),
    new TaxedProduct("Boots", 100));

// The static keyword is used on the process method defined by the TaxedProduct class
// and is accessed as TaxedProduct.process.