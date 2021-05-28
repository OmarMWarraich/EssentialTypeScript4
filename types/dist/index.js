"use strict";
// Add Support for Another Type
Object.defineProperty(exports, "__esModule", { value: true });
// The problem with the PeopleCollection class is that it works only on Person objects.
// Doesnt work on Products objects. A new class could duplicate the funcitonality. Code
// might become cumbersome therefore another approach is to take advantage of the 
// TypeScript features and modify the existing class to support multiple types.
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
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
console.log(`Names: ${peopleData.getNames().join(', ')}`);
let firstPerson = peopleData.getItem(0);
if (firstPerson instanceof dataTypes_1.Person) {
    console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
}
// Above a Type Union to add support for the Product class.  
