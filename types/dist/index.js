// Use Type Aliases for Shape Types
// A Type alias can be used to give a name to a specific shape, making it wasier to 
// refer to the shape in code consistently.
var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30,
    hasFeature: (feature) => feature === Feature.Waterproof };
let products = [hat, gloves, umbrella];
products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
    + `${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`));
// The alias assigns a name to the shape, which can be used in type annotations.
// Above, an alias named Product is created and used as the type for the array.
// Using an alias doesn't change the output from the code when it is compiled and 
// executed.
