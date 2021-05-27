// Avoiding Problems with Empty Arrays

// Another reason for using type annotations for arrays is that the
// compiler will infer the type any for arrays that are created
// empty.

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let prices = [];
prices.push(...[100, 75, 42, "20"]);

let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];

prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
})

// There are no intial values for the compiler to use when selecting
// the type for the prices array. The only option available to the
// compiler is to use any since it has no other information to 
// work with which can be seen in inde.d.ts in dist folder.

// The effect of allowing the compiler to infer the type of the 
// empty array is to create a gap in the type checking process.
// The code works because the JS multiplication operator coerces
// string values to number values automatically. This can be useful
// behaviour, but it is likely to be used accidentally, and it is 
// for this reason that you should use explicit types.