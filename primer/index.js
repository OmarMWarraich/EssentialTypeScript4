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
    },
// A method is a property whose value is a function, which means that all the features
// and behaviours that functions provide, such as default and rest parameters can be used
// for methods. Using Concise Methods Syntax.
    writeDetails: () =>
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)
    
};

let boots = {
    name: "Boots",
    price: "100",

    get priceIncTax() {
        return Number(this.price) * 1.2;
    }
}

hat.writeDetails();
hat.price = 120;
hat.writeDetails();

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = 120;
console.log(`Boots ${boots.price}, ${boots.priceIncTax}`);
