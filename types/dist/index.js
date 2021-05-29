"use strict";
// Creating an Abstract Interface Implementation
Object.defineProperty(exports, "__esModule", { value: true });
// An abstract class can provide a partial implementation of an interface, which can be
// completed by subclasses. The abstract class has the same set of options for dealing 
// with type parametrs as regular classes: pass it on to subclasses unchanged, apply further
// restrictions or fix for specific types. Below shows an abstract class passed on the 
// interface's generic type argument.
// Defining an Abstract Class.
const dataTypes_1 = require("./dataTypes");
class ArrayCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get count() {
        return this.items.length;
    }
}
class ProductCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === searchTerm);
    }
}
class PersonCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === searchTerm || item.city === searchTerm);
    }
}
let peopleCollection = new PersonCollection();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Peters", "New York"));
let productCollection = new ProductCollection();
productCollection.add(new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25));
[peopleCollection, productCollection].forEach(c => console.log(`Size: ${c.count}`));
// The ArrayCollection<T> class is abstract and provides a partial implementation of the 
// Collection<T> interface, leaving subclasses to provide the get method. The 
// ProductCollection and PersonCollection classes extend ArrayCollection<T>, narrowing
// the generic type parameter to specify types and impementing the get method to use the 
// properties of the type they operate on.
