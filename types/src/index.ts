// Create Types with a Type Mapping

// The final feature provided by type mappings is the ability to create new types, rather
// than transform a specific one. Below shows the basic use of this feature, which creates
// a type that contains name and city properties.

// Creating a Type.

import { City, Person, Product,Employee } from "./dataTypes";

type CustomMapped<K extends keyof any, T> = {
    [P in K]: T
};



let p1: CustomMapped<"name" | "city", string> = { name: "Bob", city: "London" };
let p2: Record<"name" | "city", string > = { name: "Alice", city: "Paris" };

console.log(`Custom mapped type: ${p1.name}, ${p1.city}`);
console.log(`Built-in mapped type (Pick): ${p2.name}, ${p2.city}`);

// The first generic type parameter is restricted using keyof any, which means that a
// literal value type union can be specified and that it can contain the property names
// required for the new type. The second generic type parameter is used to specify the
// type for the properties that are created and is used like this.
// let p1: CustomMapped<"name" | "city", string> = { name: "Bob", city: "London" };

// The mapping produces a type with two string properties: name and city. TS provides
// the builtin Record mapping, which performs the same task.
// let p2: Record<"name"| "city", string> = { name: "Alice", city: "Paris"};

//Mappings are more flexible than they might appear and that literal value types restricted
// by keyof any can accept any combination of property names.