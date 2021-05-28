// Applying a Type Parameter to a Method

// The second type parameter isnt as flexible as it could be because it requires the 
// data type used by the collate method to be specified when the DataCollection object
// is created, meaning that's the only data type that can be used with that method.

// When a type is used by only one method, the type parameter can be moved from the class
// declaration and applied directly to the method, allowing a different type to be 
// specified each time the method is invoked.

// Applying a Type Parameter to a Method

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

let peopleData = new DataCollection<Person>(people);
let collatedData = peopleData.collate<City>(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
let empData = peopleData.collate<Employee>(employees, "name", "name");
empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));

// The type parameter U is applied directly to the collate method, allowing a type to
// provided when the method is invoked.

// The method's type parameter allows the collate method to be invoked using City objects
// and then invoked again with Employee objects.


