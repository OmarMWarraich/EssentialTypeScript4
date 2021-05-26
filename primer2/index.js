let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`toString: ${hat.toString()}`);

// the first console.log statement recieves  template string that includes the price property, which is one of 
// the hat's own properties. The statement invokes the toString method. None of the hat object's own properties
// is named toString, so the JS runtime turns to the hat Objects' prototype, which is Object and which does 
// provide a property named toString.