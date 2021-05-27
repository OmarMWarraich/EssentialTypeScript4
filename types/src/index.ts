// Destructuring Tuples

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];

let [hatname, hatprice] = hat;
console.log(`Name: ${hatname}`);
console.log(`Price: ${hatprice.toFixed(2)}`);

// The hat tuple is destructured and its values are assigned to
// hatname and hatprice variables, which are written to the console.

