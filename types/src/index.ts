// Allowing the Compiler to Infer Type Arguments

// TS compiler can infer generic type arguments based on the way that objects are 
// created or methods are invoked. This can be a useful way to write concise code but 
// requires caution because you must ensure that you initialize objects with the types
// that you would have specified explicitly.

// Below DataCollection<T> instantiated and collate method invoked without type arguments
// leaving the compiler to infer the type.

// Using Generic Type Inference

import { City,Person, Product, Employee } from './dataTypes';

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales")];



class DataCollection<T extends {name: string}> {

    private items: T[] = [];

    constructor(initalItems: T[]) {
        this.items.push(...initalItems);
    }

    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
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

export let peopleData = new DataCollection(people);
export let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
export let empData = peopleData.collate(employees, "name", "name");
empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));

// The compiler is able to infer the type arguments based on the argument passed to the
// DataCollection<T> constructor and the first argument passed to the collate method.
// To check the types inferred by the compiler, examine the index.d.ts.
