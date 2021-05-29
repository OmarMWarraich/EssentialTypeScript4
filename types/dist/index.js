"use strict";
// Using Index Types
Object.defineProperty(exports, "__esModule", { value: true });
let myVar = "name";
myVar = "price";
myVar = "someOtherName";
// The type annotation for the myVar variable is keyof Product, which will be the union
// of the property names defined by the Product class. The result is that myVar can be
// assigned only the 'string values' 'name' and 'price' because these are the names of the
// only 'two properties' defined by the Product class in the 'dataTypes.ts'.
// The keyof keyword can be used to constrain generic type parameters so that they can 
// only be typed to match the properties of another type.
