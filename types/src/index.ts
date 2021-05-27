// Including Methods in Shape Types

// Shape Types can include methods as well as properties, giving greater control over how
// objects are matched by the type. 

enum Feature { Waterproof, Insulated }

let hat = { name: "Hat", price : 100 };
let gloves = { name: "Gloves", price: 75 };

let umbrella = { name: "Umbrella", price: 30, 
        hasFeature: (feature) => feature === Feature.Waterproof };

let products: { name: string, price?: number,
    hasFeature?(Feature):boolean}[] = [hat, gloves, umbrella];

products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
    + `Waterproof: ${ prod.hasFeature(Feature.Waterproof) }`));

// The Type annotation for the proiducts array includes an optional property called 
// hasFeature that represents a method. A method property is similar to a regular
// property with the addition of parantheses that describes the types of the parameters,
// followed by a colon and then the result type. 

// A method in a shape Type
// The method included in the shape type specifies a method called hasFeature that has
// one parameter, which must be a value from the Feature enum and which returns a boolean
// result.

// Tip:
// Methods in Shape types don't have to be optional, but when they are, the question mark
// comes after the method name and before the parantheses that denote the start of the
// parameter types.

// 
