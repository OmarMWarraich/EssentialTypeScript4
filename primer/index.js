let hat = {
    name: "Hat",
    price: 100
};

let boots = {
    name: "Boots",
    price: "100"
}

let additionalProperties = { ...hat, discounted: true };
console.log(`Additional: ${JSON.stringify(additionalProperties)}`)

let replacedProperties = { ...hat, price: 10};
console.log(`Replaced: ${JSON.stringify(replacedProperties)}`)

let { price , ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`)