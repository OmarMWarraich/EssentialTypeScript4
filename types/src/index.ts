// Creating an Iterable Class

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

import { City, Person, Product, Employee } from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

type  shapeType = { name: string };

class Collection<T extends shapeType> implements Iterable<T> {
    private items: Map<string, T>;

    constructor(initialItems: T[] = []) {
        this.items = new Map<string, T>();
        this.add(...initialItems);
    }
    
    add(...newItems: T[]): void{
        newItems.forEach(newItem => this.items.set(newItem.name, newItem));
}

    get(name: string): T {
        return this.items.get(name);
    }

    get count(): number {
        return this.items.size;
    }

    [Symbol.iterator](): Iterator<T> {
        return this.items.values();
    }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${ productCollection.count } products`);

[...productCollection].forEach(p =>
    console.log(`Product: ${p.name}, ${p.price}`));

// let iterator: Iterator<Product> = productCollection.values();
// let result: IteratorResult<Product> = iterator.next();
// while (!result.done) {
//     console.log(`Product: ${ result.value.name }, ${ result.value.price }`);
//     result = iterator.next();
// }


// The new property implements the Iterable<T> interface, indicating that it defines a 
// Symbol.iterator property that returns an Iterator<T> object that can be used for 
// iteration.