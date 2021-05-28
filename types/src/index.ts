// Restricting the Generic Type Parameter

// The third approach strikes a balnce between the earlier two commits, providing a generic
// type variable but restricting it to specific types. This allows functionality that can 
// depend on features of particular classes without fixing the type parameter completely.

// Restricting a Type Parameter

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

class SearchableCollection<T extends Employee | Person>  extends DataCollection<T> {

    constructor(initialItems: T[]) {
        super(initialItems);
    }

    find(searchTerm: string): T[] {
        return this.items.filter(item => {
            if (item instanceof Employee ) {
                return item.name === searchTerm || item.role === searchTerm;
            } else if (item instanceof Person) {
                return item.name === searchTerm || item.city === searchTerm;
            }
        });  
    }
}


let employeeData = new SearchableCollection<Employee>(employees);
employeeData.find("Sales").forEach(e =>
    console.log(`Employee ${ e.name }, ${ e.role }`));


// The type parameter specified by the subclass must be assignable to the type parameter
// it inherits, meaning that only a more restrictive type can be used. Above, the 
// Employee | Person Union can be assigned to the shape used to restrict the 
// DataCollection<T> type parameter.

// The find method uses the instanceof keyword to narrow objects to specific types to 
// make property value comparisons.