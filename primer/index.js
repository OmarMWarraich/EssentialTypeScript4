let hat = {
    name: "Hat",
    price: 100
};

let boots = {
    name: "Boots",
    price: "100"
}

let otherHat = { ...hat };
console.log(`Spread: ${otherHat.name}, ${otherHat.price}`);