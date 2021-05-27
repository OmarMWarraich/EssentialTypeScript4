// Using Shape Type Annotation

let hat = { name: "Hat", price : 100 };
let gloves = { name: "Gloves", price: 75 };

let umbrella = { name: "Umbrella"};

let products: { name: string, price: number }[] = [hat, gloves, umbrella];

products.forEach(prod => console.log(`${prod.name}: ${prod.price}`));

