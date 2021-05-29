"use strict";
// Type Guarding Generic Types
Object.defineProperty(exports, "__esModule", { value: true });
// The SearchableCollection<T> class last commit used the instanceof keyword to identify 
// Employee and Person objects. This is manageable because the restriction applied to the
// type parameters means that there are only a small number of types to deal with. For classes
// with type parameters that are not restricted, narrowing to a specific type can be
// difficult.
// Narrowing a Generic Type
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
    filter() {
        return this.items.filter(item => item instanceof V);
    }
}
let mixedData = new DataCollection([...people, ...products]);
let filteredProducts = mixedData.filter();
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
// introduced a filter method that uses the instanceof keyword to select objects of a 
// specific type from the array of data items. A DataCollection<Person | Product> object
// is created with an array that contains a mix of Person and Product objects, and the new
// filter method is used to select the Product objects.
// error TS2693: 'V' only refers to a type, but is being used as a value here.
