// Defining Multiple Type Parameters

// A class can define multiple type parameters. Below a second parameter added to the
// DataCollection<T> class and used for data correlation. Methods no longer reqd removed.

// Defining Another Generic Type Parameter

import { City,Person, Product } from './dataTypes';

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];

class DataCollection<T extends {name: string}, U> {

    private items: T[] = [];

    constructor(initalItems: T[]) {
        this.items.push(...initalItems);
    }

    collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}

let peopleData = new DataCollection<Person, City>(people);
let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));


