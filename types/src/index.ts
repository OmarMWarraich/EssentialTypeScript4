// Type Guarding Generic Types

// The SearchableCollection<T> class last commit used the instanceof keyword to identify 
// Employee and Person objects. This is manageable because the restriction applied to the
// type parameters means that there are only a small number of types to deal with. For classes
// with type parameters that are not restricted, narrowing to a specific type can be
// difficult.

// Narrowing a Generic Type

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

    filter<V extends T>(): V[] {
        return this.items.filter(item => item instanceof V) as V[];
    }
}

let mixedData = new DataCollection<Person | Product>([...people, ...products]);
let filteredProducts = mixedData.filter<Product>();
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));

// introduced a filter method that uses the instanceof keyword to select objects of a 
// specific type from the array of data items. A DataCollection<Person | Product> object
// is created with an array that contains a mix of Person and Product objects, and the new
// filter method is used to select the Product objects.

// error TS2693: 'V' only refers to a type, but is being used as a value here.
