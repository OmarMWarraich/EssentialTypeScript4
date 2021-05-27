// Use Type Aliases for Shape Types

// A Type alias can be used to give a name to a specific shape, making it wasier to 
// refer to the shape in code consistently.

enum Feature { Waterproof, Insulated }

type Product = { 
    name: string,
    price?: number, 
    hasFeature?(Feature): boolean
};

let hat = { name: "Hat", price : 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30, 
        hasFeature: (feature) => feature === Feature.Waterproof };

let products: Product[] = [hat, gloves, umbrella];

products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
    + `${ prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false" }`));

// The alias assigns a name to the shape, which can be used in type annotations.
// Above, an alias named Product is created and used as the type for the array.
// Using an alias doesn't change the output from the code when it is compiled and 
// executed.