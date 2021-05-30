// Use Conditional Types

// Conditional types are expressions containing generic type parameters that are 
// evaluated to select new types. Below a basic conditional type.

// Using a Conditional Type.

import { City, Person, Product,Employee } from "./dataTypes";

type resultType<T extends boolean> = T extends true ? string : number;

let firstVal: resultType<true> = "String Value";
let secondVal: resultType<false> = 100;

let mismatchCheck: resultType<false> = "String Value";

// Conditional Types have a generic type parameter and a ternary expression that 
// selects a result type.

// A conditional type is a placeholder for one of its result types, which isnt chosen
// until the generic type parameter is used, which allows the expression to be 
// evaluated using one of the result types selected.

// Above, the resultType<T> conditional type is a placeholder for the string and number
// types, meaning that the argument for the generic type T will determine whether the 
// conditional type resolves to string or number. The generic type parameter T is 
// restricted so that it can only accept boolean values, and the expression will evaluate
// as true if the argument provided for T is the literal value type true. The result is 
// that resultType<T> resolves to string when T is true.
// ...
// let firstVal: resultType<true> = "String Value";
// let stringTypeCheck: string = firstVal;
// ...
// The compiler resolves the conditional type and knows that the type annotation for 
// firstVal resolves to string, allowing a string literal value to be assigned to firstVal.
// When the generic type argument is false, the conditional type resolves to number.

// ...
// let secondVal: resultType<false> = 100;
// let numberTypeCheck: number = secondVal;

// The compiler enforces type safety with conditional types. Final statement: conditional
// type resolves to number but is assigned a string value producing compiler error;
// TS2322: Type 'String Value' is not assignable to type 'number'.


