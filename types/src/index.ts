// Extending Generic Interfaces

// Generic Interfaces can be extended just like regular interfaces, and the options for
// dealing with its type parameters are the same as when extending a generic class. Below
// shows a set of interfaces that extend the Collection<T> interface.

import { City, Person, Product, Employee } from './dataTypes';

type shapeType = { name: string };

interface Collection<T extends shapeType> {

    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

interface SearchableCollection<T extends shapeType> extends Collection<T> {
    find(name: string): T | undefined;
}

interface ProductCollection extends Collection<Product> {
    sumPrices(): number;
}

interface PeopleCollection<T extends Product | Employee> extends Collection<T> {
    getNames(): string[];
}

// No output