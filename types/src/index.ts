// Fixing the Generic Type Parameter

// Some classes need to define functionality that is only available using a subset of the
// types that are supported by the superclass. In these situations, a subclass can use a 
// fixed type for the superclass's type parameter, such that the subclass isnt a generic.

// Fixing a Generic Type Parameter

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

class SearchableCollection extends DataCollection<Employee> {

    constructor(initialItems: Employee[]) {
        super(initialItems);
    }

    find(searchTerm: string): Employee[] {
        return this.items.filter(item => 
            item.name === searchTerm || item.role === searchTerm);
    }
}

let employeeData = new SearchableCollection(employees);
employeeData.find("Sales").forEach(e =>
    console.log(`Employee ${ e.name }, ${ e.role }`));


// The SearchableCollection class extends DataColection<Employee>, which fixes the
// generic type parameter so that the Searchable Collection can deal only with Employee
// objects. No type parameter can be used to create a SearchableCollection object, and
// the code in the find method can safely access the porperties defined by the
// Employee class.