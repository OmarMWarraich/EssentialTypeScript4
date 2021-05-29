// Implementing a Generic Interface

// When a class implements a generic interface, it must implement all the interface
// properties and methods but it has some choices about how to deal with type parameters,
// as described in the following sections. Some of these options are similar to those
// used when extending generic classes and interfaces.

// Passing on the Generic Type Parameter

// The simplest approach is to implement the interface properties and methods without 
// changing the type parameter, creating a generic class that directly implements the
// interface.

// Implementing an Interface.

import { City, Person, Product, Employee } from './dataTypes';

type shapeType = { name: string };

interface Collection<T extends shapeType> {

    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

class ArrayCollection<DataType extends shapeType> implements Collection<DataType> {
    private items: DataType[] = [];

    add(...newItems): void {
        this.items.push(...newItems);
    }

    get(name: string): DataType {
        return this.items.find(item => item.name === name);
    }

    get count(): number {
        return this.items.length;
    }
}

let peopleCollection: Collection<Person> = new ArrayCollection<Person>();
peopleCollection.add(new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"));
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

