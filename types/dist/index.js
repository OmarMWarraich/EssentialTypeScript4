"use strict";
// Constraining Generic Type Values
Object.defineProperty(exports, "__esModule", { value: true });
// Earlier getNames method commented out. By default any type can be used for a generic
// type argument, so the compiler treats generic types as any by default, meaning it
// wont let me access the name property on which the getNames method depends without 
// some kind of type narrowing.
// TypeNarrowing could be done within the getNames method. Better still to restrict the
// range of types that can be used as the value for the generic type parameter so that
// the class be instantiated only with types that define the features on which the
// generic class relies.
// Restricting Generic Types
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
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
// The extends keyword is used after the type parameter name to specify a constraint.
// A generic type parameter restriction
