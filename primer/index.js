let hat = {
    name: "Hat",
    price: 100
};

let boots = {
    name: "Boots",
    price: "100"
}

let sumPrices = (...numbers) => numbers.reduce((total, val) =>
     total +(Number.isNaN(Number(val)) ? 0 : Number(val)));

let totalPrice = sumPrices(hat.price, boots.price);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);