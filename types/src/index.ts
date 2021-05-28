// Constraining Generic Type Values

// Earlier getNames method commented out. By default any type can be used for a generic
// type argument, so the compiler treats generic types as any by default, meaning it
// wont let me access the name property on which the getNames method depends without 
// some kind of type narrowing.

// TypeNarrowing could be done within the getNames method. Better still to restrict the
// range of types that can be used as the value for the generic type parameter so that
// the class be instantiated only with types that define the features on which the
// generic class relies.

// Restricting Generic Types

import { Person, Product } from './dataTypes';

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

// type dataType = Person | Product;

class DataCollection<T extends (Person | Product)> {

    private items: T[] = [];

    constructor(initalItems: T[]) {
        this.items.push(...initalItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): T {
        return this.items[index];
    }
}

let peopleData = new DataCollection<Person>(people);

console.log(`Person Names: ${peopleData.getNames().join(', ')}`);
let firstPerson = peopleData.getItem(0);
//if (firstPerson instanceof Person) {
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
//}

let productData = new DataCollection<Product>(products);
console.log(`Product Names: ${productData.getNames().join(', ')}`);
let firstProduct = productData.getItem(0);
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);


// The extends keyword is used after the type parameter name to specify a constraint.

// A generic type parameter restriction
