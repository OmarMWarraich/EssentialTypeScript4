// Mapping Specific Properties

// The index type query for a mapped type can be expressed as a generic type parameter,
// which can then be used to select specific properties to map by name.

// Map Specific Properties.

import { City, Person, Product,Employee } from "./dataTypes";

type SelectProperties<T, K extends keyof T> = {
    [P in K]: T[P]
};

let p1: SelectProperties<Product, "name"> = { name: "Kayak" };
let p2: Pick<Product, "name"> = { name: "Kayak"};
let p3: Omit<Product, "price"> = { name: "Kayak" };
console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type (Pick): ${p2.name}`);
console.log(`Built-in mapped type (Omit): ${p3.name}`);

// The SelectProperties mapping defines an additional generic type parameter named K that
// is restricted using keyof so that only types that correspond to properties defined by
// the type parameter can be specified. The new type parameter is used in the mapping's 
// name selector, with the result that individual properties cn be selected for inclusion
// in the mapped type. all 3 results "Kayak"