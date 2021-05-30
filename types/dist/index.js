"use strict";
// Combining Transformations in a Single Mapping
Object.defineProperty(exports, "__esModule", { value: true });
let p1 = { name: "Kayak" };
let p2 = { name: "Lifejacket", price: 48.95 };
console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type (Pick): ${p2.name}, ${p2.price}`);
// For custom type mappings, the ? and readonly keyword can be applied in the same 
// transformation, which can be constrained to allow properties to be selected by name.
// Mappings can also be chained together, as shown by the combination of the Pick, Partial
// and Readonly mappings.
