// Combining Transformations in a Single Mapping

// Second last commit namely 'Built-in Mappings' showed how mappings can be combined to
// create a chain of transformations, but mappings can apply multiple changes to 
// properties.

// Combining Transformations in a Single Mapping

import { City, Person, Product,Employee } from "./dataTypes";

type CustomMapped<T, K extends keyof T> = {
    readonly[P in K]?: T[P]
};

type BuiltInMapped<T, K extends keyof T> = Readonly<Partial<Pick<T, K>>>;

let p1: CustomMapped<Product, "name"> = { name: "Kayak" };
let p2: BuiltInMapped<Product, "name" | "price" > = { name: "Lifejacket", price: 48.95};

console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type (Pick): ${p2.name}, ${p2.price}`);

// For custom type mappings, the ? and readonly keyword can be applied in the same 
// transformation, which can be constrained to allow properties to be selected by name.
// Mappings can also be chained together, as shown by the combination of the Pick, Partial
// and Readonly mappings.