let hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,

    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price() {
        return this._price;
    }
};

let boots = {
    name: "Boots",
    price: "100",

    get priceIncTax() {
        return Number(this.price) * 1.2;
    }
}

console.log(`Hat: ${hat.price}, ${hat.priceIncTax}`);
hat.price = 120;
console.log(`Hat ${hat.price}, ${hat.priceIncTax}`);

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = 120;
console.log(`Boots ${boots.price}, ${boots.priceIncTax}`);
