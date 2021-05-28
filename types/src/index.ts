// Constraining Generic Types Using a Shape

// Using a type union to constrain generic type parameters is useful, but the union must
// be extended for each new type that is required. An alternative approach is to use a
// shape to constrain the type parameter, which will allow only the properties that the 
// generic class relies on.

// Using a Shape Type

import { City,Person, Product } from './dataTypes';

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];


// type dataType = Person | Product;

class DataCollection<T extends {name: string}> {

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

let cityData = new DataCollection<City>(cities);
console.log(`City Names: ${cityData.getNames().join(', ')}`);


// Above specified shape tells the compiler that the DataCollection<T> class can be 
// instantiated using any type that has a name property returning a string. This allows
// DataCollection objects to be created to deal with Person, Product and City objects 
// without requiring individual types to be specified.

// Tip: Generic type parameters can also be constrained using type aliases and interfaces.
// also possible to constrain generic types to those that define a specific constructor
// shape which is done with the extendor keywords.