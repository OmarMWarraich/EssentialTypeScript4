"use strict";
// Restricting or Fixing the Generic Type Parameter
Object.defineProperty(exports, "__esModule", { value: true });
// Classes can provide an in implementation of an interface that is speccific to a type 
// or a subset of the types supported by the interface.
// Implementing an Interface.
const dataTypes_1 = require("./dataTypes");
class PersonCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find(item => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
let peopleCollection = new PersonCollection();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);
// The PersonCollection class implements the Collection<Product> interface.
