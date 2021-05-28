// Extending Generic Classes

// A generic class can be extended and the subclass can choose to deal with the generic 
// type parameters in several ways.

// Adding Extra Features to the Existing Type Parameters

// The first approach is to simply add features to those defined by the superclass 
// using the same generic types.

// Subclassing a Generic Class

import { City, Person, Product, Employee } from './dataTypes';

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales")];



class DataCollection<T extends {name: string}> {

    protected items: T[] = [];

    constructor(initalItems: T[]) {
        this.items.push(...initalItems);
    }

    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
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

class SearchableCollection<T extends {name: string }> extends DataCollection<T> {

    constructor(initialItems: T[]) {
        super(initialItems);
    }

    find(name: string): T | undefined {
        return this.items.find(item => item.name === name);
    }
}

let peopleData = new SearchableCollection<Person>(people);
let foundPerson = peopleData.find("Bob Smith");
if (foundPerson !== undefined) {
    console.log(`Person ${ foundPerson.name }, ${ foundPerson.city }`);
}

// The SearchableCollection<T> class is derived from DataCollection<T> and defines a 
// find method that locates an object by its name property. The declaration of the 
// SerachableCollection<T> class uses the extends keyword and includes type parameters.

// The type of a generic class includes its type parameters so that the superclass is
// DataCollection<T>. The type parameter defined by the SearchableCollection<T> must be
// compatible with the type parameter of the superclass, therefore, same shape type 
// specifies types that defined a name property. 

// The SearchableCollection<T> class is instantiated just like any other using a type 
// argument (or allowing the ompiler to infer the type argument).