"use strict";
// Restricting the Generic Type Parameter
Object.defineProperty(exports, "__esModule", { value: true });
// The third approach strikes a balnce between the earlier two commits, providing a generic
// type variable but restricting it to specific types. This allows functionality that can 
// depend on features of particular classes without fixing the type parameter completely.
// Restricting a Type Parameter
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
        return this.items.filter(item => {
            if (item instanceof dataTypes_1.Employee) {
                return item.name === searchTerm || item.role === searchTerm;
            }
            else if (item instanceof dataTypes_1.Person) {
                return item.name === searchTerm || item.city === searchTerm;
            }
        });
    }
}
let employeeData = new SearchableCollection(employees);
employeeData.find("Sales").forEach(e => console.log(`Employee ${e.name}, ${e.role}`));
// The type parameter specified by the subclass must be assignable to the type parameter
// it inherits, meaning that only a more restrictive type can be used. Above, the 
// Employee | Person Union can be assigned to the shape used to restrict the 
// DataCollection<T> type parameter.
// The find method uses the instanceof keyword to narrow objects to specific types to 
// make property value comparisons.
