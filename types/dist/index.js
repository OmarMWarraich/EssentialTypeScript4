"use strict";
// Using Generic Iterators
Object.defineProperty(exports, "__esModule", { value: true });
// Iterators allow a sequence of values to be enumerated and support for iterators is a 
// common feature for classes that operate on other types such as collections. TS provides
// the interfaces for describingiterators and their results.
// The TypeScript Iterator Interface
//     Name                   Description
//  Iterator<T>    Interface describes an iterator whose next method returns Iterator Result<T> objects.    
// IteratorResult<T>   result produced by an iterator, with done and value properties.
// Iterable<T>     object that has a Symbol.iterator property and that supports iteration directly.
// IterableIterator<T.  combines Iterator<T> and Iterable<T> interfaces to describe an 
//                        object with a symbol defining a next method and result property.
//Iterating Objects
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
let iterator = productCollection.values();
let result = iterator.next();
while (!result.done) {
    console.log(`Product: ${result.value.name}, ${result.value.price}`);
    result = iterator.next();
}
// The values method defined by the Collection<T> class returns an Iterator<T>. When
// this method is invoked on the Collection<Product> object, the iterator it returns 
// will produce IteratorResult<Product> objects through its next method. The result
// property of each IteratorResult<Product> object will return a Product, allowing
// the objects managed by the collection to be iterated.
