// Add Support for Another Type

// The problem with the PeopleCollection class is that it works only on Person objects.
// Doesnt work on Products objects. A new class could duplicate the funcitonality. Code
// might become cumbersome therefore another approach is to take advantage of the 
// TypeScript features and modify the existing class to support multiple types.

import { Person, Product } from './dataTypes';

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

type dataType = Person | Product;

class DataCollection {
    private items: dataType[] = [];

    constructor(initalItems: dataType[]) {
        this.items.push(...initalItems);
    }

    add(newItem: dataType) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): dataType {
        return this.items[index];
    }
}

let peopleData = new DataCollection(people);

console.log(`Names: ${peopleData.getNames().join(', ')}`);
let firstPerson = peopleData.getItem(0);
if (firstPerson instanceof Person) {
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
}

// Above a Type Union to add support for the Product class.  