"use strict";
// Combining an iterable and iterator
Object.defineProperty(exports, "__esModule", { value: true });
// The IterableIterator<T> interface can be used to describe objects that can be iterated
// and that also define a Symbol.iterator property. Objects that implement this interface
// can be enumerated more elegantly.
// The TypeScript Iterator Interface
//     Name                   Description
//  Iterator<T>    Interface describes an iterator whose next method returns Iterator Result<T> objects.    
// IteratorResult<T>   result produced by an iterator, with done and value properties.
// Iterable<T>     object that has a Symbol.iterator property and that supports iteration directly.
// IterableIterator<T.  combines Iterator<T> and Iterable<T> interfaces to describe an 
//                        object with a symbol defining a next method and result property.
//Using an Iterable Iterator
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
    values() {
        return this.items.values();
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
[...productCollection.values()].forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
// let iterator: Iterator<Product> = productCollection.values();
// let result: IteratorResult<Product> = iterator.next();
// while (!result.done) {
//     console.log(`Product: ${ result.value.name }, ${ result.value.price }`);
//     result = iterator.next();
// }
// The values methods return an IterableIterator object, which it is able to do because the
// result of the Map method defines all the members specified by the interface. The combined
// interface allows the result of the values method to be iterated directly, and the listing
// uses the spread operator to populate an array and then enumerates its contents with the
// forEach method.
