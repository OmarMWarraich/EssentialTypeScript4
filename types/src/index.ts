// Using Generic Iterators

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

import { City, Person, Product, Employee } from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

type  shapeType = { name: string };

class Collection<T extends shapeType> {
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

    values(): Iterator<T> {
        return this.items.values();
    }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${ productCollection.count } products`);

let iterator: Iterator<Product> = productCollection.values();
let result: IteratorResult<Product> = iterator.next();
while (!result.done) {
    console.log(`Product: ${ result.value.name }, ${ result.value.price }`);
    result = iterator.next();
}


// The values method defined by the Collection<T> class returns an Iterator<T>. When
// this method is invoked on the Collection<Product> object, the iterator it returns 
// will produce IteratorResult<Product> objects through its next method. The result
// property of each IteratorResult<Product> object will return a Product, allowing
// the objects managed by the collection to be iterated.