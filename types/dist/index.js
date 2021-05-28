"use strict";
// Fixing the Generic Type Parameter
Object.defineProperty(exports, "__esModule", { value: true });
// Some classes need to define functionality that is only available using a subset of the
// types that are supported by the superclass. In these situations, a subclass can use a 
// fixed type for the superclass's type parameter, such that the subclass isnt a generic.
// Fixing a Generic Type Parameter
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
class SearchableCollection extends DataCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    find(searchTerm) {
        return this.items.filter(item => item.name === searchTerm || item.role === searchTerm);
    }
}
let employeeData = new SearchableCollection(employees);
employeeData.find("Sales").forEach(e => console.log(`Employee ${e.name}, ${e.role}`));
// The SearchableCollection class extends DataColection<Employee>, which fixes the
// generic type parameter so that the Searchable Collection can deal only with Employee
// objects. No type parameter can be used to create a SearchableCollection object, and
// the code in the find method can safely access the porperties defined by the
// Employee class.
