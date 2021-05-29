"use strict";
// Preparing for Chapter 12- Advanced Generic Types
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
class Collection {
    constructor(items = []) {
        this.items = items;
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find(item => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
let p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);
