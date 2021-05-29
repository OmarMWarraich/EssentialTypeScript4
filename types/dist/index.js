"use strict";
// Using A Map.
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
class Collection {
    constructor(initialItems = []) {
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.set(newItem.name, newItem));
    }
    get(name) {
        return this.items.get(name);
    }
    get count() {
        return this.items.size;
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
let p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);
// Generic classes dont have to provide generic type parameters for collections and can
// specify concrete types instead. A Map is used to store objects using the name property
// as a key. The name property can be used safely because it is part of the restriction 
// applied to the type paramter named T.
