// Dealing with Excess Properties
// TS compiler is good at inferring types, which means that type annotations can often
// be omitted. However, sometimes, providing information about types to the compiler can
// change its behavious.
// Define Objects
var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30,
    hasFeature: (feature) => feature === Feature.Waterproof };
let mirrorShades = { name: "Sunglasses", price: 54, finish: "mirrored" };
let darkShades = { name: "Sunglasses", price: 54, finish: "flat" };
let products = [hat, gloves, umbrella, mirrorShades, darkShades];
products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
    + `${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`));
// The compiler treats the mirrorShades and darkShades objects differently, even though
// they have the same shape. The compiler reports errors when object literals with type
// annotations define additional properties, because this is likely to be a mistake. In 
// the case of the example, the darkShades object has a Product type annotation. The
// finish property isn't part of the Product shape and is known as an excess property,
// which the compiler reports as an error. Excess properties do not cause errors when an
// object is defined without a type annotation, which means the darkShades object can be
// used as a Product.
// However, when the suppressExcessPropertyErrors setting is true, the compiler wont
// report an error if an object literal defines properties that are not part of the 
// type declared by the annotation. When the change to the configuration file is saved,
// the code will be compiled and executed and produce the desired output.
