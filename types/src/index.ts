// Using a Generic Type Parameter with a Mapped Type

// Mapped types become more useful when they define a generic type parameter, as below,
// which allows the transformation they describe to be applied to a broader range of types.

// Use a Generic Type Parameter with a Mapped Type

import { City, Person, Product, Employee } from "./dataTypes";

type Mapped<T> = {
    [P in keyof T] : T[P]
};

let p: Mapped<Product> = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);

let c: Mapped<City> = { name: "London", population: 8136000};
console.log(`Mapped type: ${c.name}, ${c.population}`);

// The Mapped<T> type defines a generic type parameter named T, which is the type to be 
// transformed. The type parameter is used in the name and type selectors, meaning that 
// any type can be mapped using a generic type parameter. 