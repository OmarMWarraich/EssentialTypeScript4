// Understanding How an Enum Works

// Enums are implemented entirely by the TS compiler, relying on
// type checking during compilation and standard JS features at 
// runtime. Each enum value has a corresponding number value that
// is assigned automatically b the compiler and that starts at zero
// by default. 

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves, Umbrella }

[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val}`);
});