// Inferring Types f Functions

// The compiler can also infer types in generic types that accept functions.

import { City, Person, Product, Employee } from './dataTypes';

type Result<T> = T extends (...args: any) => infer R ? R : never;

function processArray<T, 
        Func extends (T) => any>(data: T[], func: Func): Result<Func>[] {
            return data.map(item => func(item));
        }
let selectName = (p: Product) => p.name;

let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];

let names: string[] = processArray(products, selectName);
names.forEach(name => console.log(`Name: ${name}`));

// The Result<T> conditional type uses the infer keyword to obtain the result type for
// a function that accepts an object of type T and produces an any result. The use of 
// type inference allows functions that process a specific type to be used while ensuring
// that the result of the processArray function is a specific type, based on the result 
// of the function provided for the func parameter. The selectName function returns the
// string value of the name property of a Product object, and the inference means that
// Result<(...args:Product[]) => string)> is correctly identified as string, allowing the
// processArray function to return a string[] result. 