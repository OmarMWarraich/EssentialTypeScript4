"use strict";
// Create Types with a Type Mapping
Object.defineProperty(exports, "__esModule", { value: true });
let p1 = { name: "Bob", city: "London" };
let p2 = { name: "Alice", city: "Paris" };
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
