// Creating Generic Class

// A generic class is a class that has a generic type parameter. A generic type parameter
// is a placeholder for a type that is specified when the class is used to create a new 
// object. Generic type parameters allow classes to be written that operate on a specified
// type without knowing what that type will be in advance.

// Using a Generic Type

import { Person, Product } from './dataTypes';

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

// type dataType = Person | Product;

class DataCollection<T> {

    private items: T[] = [];

    constructor(initalItems: T[]) {
        this.items.push(...initalItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    // getNames(): string[] {
    //     return this.items.map(item => item.name);
    // }

    getItem(index: number): T {
        return this.items[index];
    }
}

let peopleData = new DataCollection<Person>(people);

//console.log(`Names: ${peopleData.getNames().join(', ')}`);
let firstPerson = peopleData.getItem(0);
//if (firstPerson instanceof Person) {
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
//}

// The DataCollection has been defined with a generic type parameter, which is part of the
// class declaration.

// A generic type parameter
// A generic type parameter is defined between angle brackets (the <and> characters), and
// only a name is specified. The convention is to start with the letter T as the name of
// the type parameter, although any naming scheme may be used.

// The result is known as generic class, meaning a class with atleast one generic type
// parameter. 