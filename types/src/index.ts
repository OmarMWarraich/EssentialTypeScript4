// Define a Class

import { Person, Product } from './dataTypes';

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

class PeopleCollection {
    private items: Person[] = [];

    constructor(initialItems: Person[]) {
        this.items.push(...initialItems);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): Person {
        return this.items[index];
    }
}

let peopleData = new PeopleCollection(people);

console.log(`Names: ${peopleData.getNames().join(', ')}`);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);

// The PeopleCollection class operates on Person objects, which are provided via the 
// constructor or the add method. The getNames method returns an array containing the
// name value of each Person object, and the getItem method allows a Person object to be
// retrieved using an index. 