"use strict";
// Using a Generic Type Parameter with a Mapped Type
Object.defineProperty(exports, "__esModule", { value: true });
let p = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);
let c = { name: "London", population: 8136000 };
console.log(`Mapped type: ${c.name}, ${c.population}`);
// The Mapped<T> type defines a generic type parameter named T, which is the type to be 
// transformed. The type parameter is used in the name and type selectors, meaning that 
// any type can be mapped using a generic type parameter. 
