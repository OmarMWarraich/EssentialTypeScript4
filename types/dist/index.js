"use strict";
// Define a Class
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
class PeopleCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    getNames() {
        return this.items.map(item => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
}
let peopleData = new PeopleCollection(people);
console.log(`Names: ${peopleData.getNames().join(', ')}`);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
// The PeopleCollection class operates on Person objects, which are provided via the 
// constructor or the add method. The getNames method returns an array containing the
// name value of each Person object, and the getItem method allows a Person object to be
// retrieved using an index. 
