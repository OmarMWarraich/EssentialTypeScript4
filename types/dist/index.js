"use strict";
// Mapping Specific Properties
Object.defineProperty(exports, "__esModule", { value: true });
let p1 = { name: "Kayak" };
let p2 = { name: "Kayak" };
let p3 = { name: "Kayak" };
console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type (Pick): ${p2.name}`);
console.log(`Built-in mapped type (Omit): ${p3.name}`);
// The SelectProperties mapping defines an additional generic type parameter named K that
// is restricted using keyof so that only types that correspond to properties defined by
// the type parameter can be specified. The new type parameter is used in the mapping's 
// name selector, with the result that individual properties cn be selected for inclusion
// in the mapped type. all 3 results "Kayak"
