"use strict";
// Implementing a Generic Interface
Object.defineProperty(exports, "__esModule", { value: true });
// When a class implements a generic interface, it must implement all the interface
// properties and methods but it has some choices about how to deal with type parameters,
// as described in the following sections. Some of these options are similar to those
// used when extending generic classes and interfaces.
// Passing on the Generic Type Parameter
// The simplest approach is to implement the interface properties and methods without 
// changing the type parameter, creating a generic class that directly implements the
// interface.
// Implementing an Interface.
const dataTypes_1 = require("./dataTypes");
class ArrayCollection {
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
let peopleCollection = new ArrayCollection();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);
// The ArrayCollection<DataType> class uses the implements keyword to declare that it
// conforms to the interface. The interface has a generic type parameter, so the 
// ArrayCollection<DataType> class must define a compatible parameter. Since the type
// parameter for the interface is required to have a name property, so must the parameter
// for the class.
// The ArrayCollection<DataType> class requires a type argument when an object is created
// and can be operated on through the Collection<T> interface. 
// The type argument resolves the generic type for the class and the interface it 
// implements so that an ArrayCollection<Person> object implements the Collection<Person> interface.
