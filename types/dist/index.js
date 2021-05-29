"use strict";
// Using a Type Predicate Function
Object.defineProperty(exports, "__esModule", { value: true });
// In situations where objects need to be identified by type, a predicate function must
// be used. Below a parameter added to the filter method that accepts a type predicate
// function, which is then used to find objects of a specific type.
// Using a Type Predicate Function
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
let cities = [new dataTypes_1.City("London", 8136000), new dataTypes_1.City("Paris", 2141000)];
let employees = [new dataTypes_1.Employee("Bob Smith", "Sales"),
    new dataTypes_1.Employee("Alice Jones", "Sales")];
class DataCollection {
    constructor(initalItems) {
        this.items = [];
        this.items.push(...initalItems);
    }
    filter(predicate) {
        return this.items.filter(item => predicate(item));
    }
}
let mixedData = new DataCollection([...people, ...products]);
function isProduct(target) {
    return target instanceof dataTypes_1.Product;
}
let filteredProducts = mixedData.filter(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
// The predicate function for the required type is provided as an argument to the filter
// method using JS features available at code execution; providing a method with the means 
// to select the required objects.
