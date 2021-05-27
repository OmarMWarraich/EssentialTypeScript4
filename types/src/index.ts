// Undestanding the Type Guard Limitation

// A related problem arises when using a type guard. Testing types
// is done using the JS typeof keyword, and since enums are implemented
// using JS number values, typeof cannot be used to distinguish between
// number and enum values.


function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum OtherEnum { First = 10, Two = 20 }
enum Product { Hat= OtherEnum.First + 1, Gloves = 20, Umbrella = Hat + Gloves }

let productValue: Product = Product.Hat;
if (typeof productValue === "number") {
    console.log("Value is a number");
}

let unionValue: number | Product = Product.Hat;
if (typeof unionValue === "number") {
    console.log("Value is a number")
}