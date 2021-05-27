// The Array Syntax


function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

// let prices: number[] = [100, 75, 42];
// is equivalent to the following code: 
let prices:Array<number> = [100, 75, 42];
let names: string[] = ["Hat", "Gloves", "Umbrella"];

prices.forEach((price: number, index: number) => {
    writePrice(names[index], calculateTax(price));
})

// The problem with this syntax is that it cant be used in TSX.