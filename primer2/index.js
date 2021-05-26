// Define Iterable Objects
// Standalone functions for iterators and generators can be useful, but the most common
// requirement is for an object to provide a sequence as part of some broader functionality.
// Define an Object with a Sequence by grouping related data items.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

class GiftPack {
    constructor(name, prod1, prod2, prod3) {
        this.name = name;
        this.prod1 = prod1;
        this.prod2 = prod2;
        this.prod3 = prod3;
    }

    getTotalPrice() {
        return [this.prod1, this.prod2, this.prod3]
            .reduce((total, p) => total + p.price, 0);
    }

    *getGenerator() {
        yield this.prod1;
        yield this.prod2;
        yield this.prod3;
    }
}

let winter = new GiftPack("winter", new Product("Hat", 100),
    new Product("Boots", 80), new Product("Gloves", 23));

console.log(`Total price: ${ winter.getTotalPrice() }`);

[...winter.getGenerator()].forEach(p => console.log(`Product: ${ p }`));

// The GiftPack class keeps track of a set of related products. One of the methods 
// defined by GiftPack is named getGenerator and is a generator that yields the products.

// This approach works but the syntax for using the iterator is a little awkward 
// because the getGenerator method has to be explicitly called.

// A more elegant approach is to use the special method name for the generator, which
// tells the JS runtime that the method provides the default iteration support for an 
// object.