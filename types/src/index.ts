// Defining Generic Interfaces

// Interfaces can be defined with generic type parameters, allowing functionality to be
// defined without specifying individual types. Below an interface defined with a generic
// type parameter.

import { City, Person, Product, Employee } from './dataTypes';

type shapeType = { name: string };

interface Collection<T extends shapeType> {

    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

//The Collection<T> interface has a generic type parameter named T, following the same 
// syntax used for class type parameters. The type parameter is used by the add and get
// methods, and it has been constrained to ensure that only types that have a name
// property can be used.
// An interface with a generic type parameter describes a set of abstract operations but
// doesnt specify which types they can be performed on, leaving specific types to be
// selected by derived dinterfaces or implementation classes.