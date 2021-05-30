// Nesting Conditional Types

// More complex combinations of types can be described by nesting conditional types. A 
// conditional type's result can be another conditional type, and the compiler will
// follow the chain of expressions until it reaches a result that isn't condtional.

// Nesting Conditional Types

import { City, Person, Product, Employee } from './dataTypes';

type resultType<T extends boolean> = T extends true ? string : number;

type references = "London" | "Bob" | "Kayak";

type nestedType<T extends references> 
    = T extends "London" ? City : T extends "Bob" ? Person : Product;

    let firstVal: nestedType<"London"> = new City("London", 8136000);
    let secondVal: nestedType<"Bob"> = new Person("Bob", "London");
    let thirdVal: nestedType<"Kayak"> = new Product("Kayak", 275);

// the type nestedType<T> is a nested conditional type to select between three types,
// based on the value of the generic type paramter. 