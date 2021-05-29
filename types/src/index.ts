// Restricting or Fixing the Generic Type Parameter

// Classes can provide an in implementation of an interface that is speccific to a type 
// or a subset of the types supported by the interface.

// Implementing an Interface.

import { City, Person, Product, Employee } from './dataTypes';

type shapeType = { name: string };

interface Collection<T extends shapeType> {

    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

class PersonCollection implements Collection<Person> {
    private items: Person[] = [];

    add(...newItems: Person[]): void {
        this.items.push(...newItems);
    }

    get(name: string): Person {
        return this.items.find(item => item.name === name);
    }

    get count(): number {
        return this.items.length;
    }
}

let peopleCollection: Collection<Person> = new PersonCollection();
peopleCollection.add(new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);

// The PersonCollection class implements the Collection<Product> interface.