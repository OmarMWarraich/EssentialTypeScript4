"use strict";
// Creating an Iterable Class
Object.defineProperty(exports, "__esModule", { value: true });
// Classes that define a Symbol.iterator property can implement the Iterable<T> interface,
// which allows iteration without needing to call a method or read a property.
// The TypeScript Iterator Interface
//     Name                   Description
//  Iterator<T>    Interface describes an iterator whose next method returns Iterator Result<T> objects.    
// IteratorResult<T>   result produced by an iterator, with done and value properties.
// Iterable<T>     object that has a Symbol.iterator property and that supports iteration directly.
// IterableIterator<T.  combines Iterator<T> and Iterable<T> interfaces to describe an 
//                        object with a symbol defining a next method and result property.
//Creating an Iterable clas
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
    [Symbol.iterator]() {
        return this.items.values();
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
[...productCollection].forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
// let iterator: Iterator<Product> = productCollection.values();
// let result: IteratorResult<Product> = iterator.next();
// while (!result.done) {
//     console.log(`Product: ${ result.value.name }, ${ result.value.price }`);
//     result = iterator.next();
// }
// The new property implements the Iterable<T> interface, indicating that it defines a 
// Symbol.iterator property that returns an Iterator<T> object that can be used for 
// iteration.
