"use strict";
// Constraining Generic Types Using a Shape
Object.defineProperty(exports, "__esModule", { value: true });
// Using a type union to constrain generic type parameters is useful, but the union must
// be extended for each new type that is required. An alternative approach is to use a
// shape to constrain the type parameter, which will allow only the properties that the 
// generic class relies on.
// Using a Shape Type
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
let cities = [new dataTypes_1.City("London", 8136000), new dataTypes_1.City("Paris", 2141000)];
// type dataType = Person | Product;
class DataCollection {
    constructor(initalItems) {
        this.items = [];
        this.items.push(...initalItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getNames() {
        return this.items.map(item => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
}
let peopleData = new DataCollection(people);
console.log(`Person Names: ${peopleData.getNames().join(', ')}`);
let firstPerson = peopleData.getItem(0);
//if (firstPerson instanceof Person) {
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
//}
let productData = new DataCollection(products);
console.log(`Product Names: ${productData.getNames().join(', ')}`);
let firstProduct = productData.getItem(0);
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);
let cityData = new DataCollection(cities);
console.log(`City Names: ${cityData.getNames().join(', ')}`);
// Above specified shape tells the compiler that the DataCollection<T> class can be 
// instantiated using any type that has a name property returning a string. This allows
// DataCollection objects to be created to deal with Person, Product and City objects 
// without requiring individual types to be specified.
// Tip: Generic type parameters can also be constrained using type aliases and interfaces.
// also possible to constrain generic types to those that define a specific constructor
// shape which is done with the extendor keywords.
