// Checking for an Optional Method
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
// The hasFeature method is invoked only if it has been defined, and code is compiled
// without error above.
