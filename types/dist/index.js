"use strict";
// Allowing the Compiler to Infer Type Arguments
Object.defineProperty(exports, "__esModule", { value: true });
exports.empData = exports.collatedData = exports.peopleData = void 0;
// TS compiler can infer generic type arguments based on the way that objects are 
// created or methods are invoked. This can be a useful way to write concise code but 
// requires caution because you must ensure that you initialize objects with the types
// that you would have specified explicitly.
// Below DataCollection<T> instantiated and collate method invoked without type arguments
// leaving the compiler to infer the type.
// Using Generic Type Inference
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
    collate(targetData, itemProp, targetProp) {
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
exports.peopleData = new DataCollection(people);
exports.collatedData = exports.peopleData.collate(cities, "city", "name");
exports.collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
exports.empData = exports.peopleData.collate(employees, "name", "name");
exports.empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));
// The compiler is able to infer the type arguments based on the argument passed to the
// DataCollection<T> constructor and the first argument passed to the collate method.
// To check the types inferred by the compiler, examine the index.d.ts.
