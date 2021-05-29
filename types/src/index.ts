// Using a Type Predicate Function

// In situations where objects need to be identified by type, a predicate function must
// be used. Below a parameter added to the filter method that accepts a type predicate
// function, which is then used to find objects of a specific type.

// Using a Type Predicate Function

import { City, Person, Product, Employee } from './dataTypes';

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales")];



class DataCollection<T> {

    protected items: T[] = [];

    constructor(initalItems: T[]) {
        this.items.push(...initalItems);
    }

    filter<V extends T>(predicate: (target) => target is V): V[] {
        return this.items.filter(item => predicate(item)) as V[];
    }
}

let mixedData = new DataCollection<Person | Product>([...people, ...products]);
function isProduct(target): target is Product {
    return target instanceof Product;
}
let filteredProducts = mixedData.filter<Product>(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));

// The predicate function for the required type is provided as an argument to the filter
// method using JS features available at code execution; providing a method with the means 
// to select the required objects.