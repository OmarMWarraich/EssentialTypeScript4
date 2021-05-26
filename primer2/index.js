// Storing Data by Index

// JS also provides Set, which stores data by index but has performance optimizations 
// and --most usefully--stores only unique values.

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }

}

let product = new Product("Hat", 100);

let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++) {
    productArray.push(product);
    productSet.add(product);
}

console.log(`Array length: ${productArray.length}`);
console.log(`Set size: ${productSet.size}`);

// adds the same product object five times to an array and a Set and then prints how
// many items each contains.

// For many projects, the need to allow or prevent duplicate values is the reason to 
// choose between an array and a Set. The API provided by Set provides comparable
// features to working with an array.