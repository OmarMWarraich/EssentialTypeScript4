"use strict";
// Use Type Mapping
Object.defineProperty(exports, "__esModule", { value: true });
let p = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);
// A type mapping is an expression that selects property names to be included in the
// mapped type and the type for each of them.
// The property name selector defines a type parameter, named P in this example and uses
// the in keyword to enumerate the types in a literal value union. The type union can be
// expressed directly, such as "name" | "price", or obtained using keyof.
// TS compiler creates a new property in the mapped type for each of the types in the
// union. The type of each property is determined by the type selector, which can be 
// obtained from the source type ussing the indexed acess operator with P as the literal
// valae type to look up. 
// The MappedProduct type above used keyof to select the properties defined by the 
// Product class and used the indexed type operator to get the type of each of these
// properties.
